const mongoose = require("mongoose");
const Loan = require("../models/loanModel");
const Borrower = require("../models/borrowerModel");
const Lender = require("../models/lenderModel");
const nodemailer = require("nodemailer");

// SMTP Mail Setup using nodemailer and app password
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER || "smartlend25@gmail.com", // Use environment variable
    pass: process.env.EMAIL_PASS || "lhqa omvn rhqb zmyb", // Use App Password securely
  },
});

exports.getLoanDetails = async (req, res) => {
  const lenderId = req.params.lenderId; // Extract lenderId from route params

  if (!lenderId) {
      return res.status(400).json({ error: "Lender ID is required" });
  }

  try {
      // Find all loans where this lender has contributed (exists in fundedBy array)
      // const loans = await Loan.find({ "fundedBy.lenderId": lenderId });
      const loans = await Loan.find({ "fundedBy.lenderId": lenderId }).populate("borrowerId", "name");


      if (loans.length === 0) {
          return res.status(404).json({ error: "No loans found for this lender" });
      }

      res.status(200).json(loans); // Return all matching loans
  } catch (error) {
      console.error("Error fetching loan details:", error);
      res.status(500).json({ error: "Internal server error" });
  }
};




// Request Loan Route
exports.requestLoan = async (req, res) => {
  try {
    const { borrowerId, amountRequested, interestRate, loanTerm, approvedByML } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(borrowerId)) {
      return res.status(400).json({ error: "Invalid borrower ID format" });
    }

    const borrower = await Borrower.findById(borrowerId);
    if (!borrower) {
      return res.status(404).json({ error: "Borrower not found" });
    }

    // Create a new loan request
    const newLoan = new Loan({
      borrowerId,
      amountRequested,
      interestRate,
      loanTerm,
      approvedByML,
      status: "Pending",
    });

    await newLoan.save();

    // Send email notification to borrower
    // Dark Blue & Subtle Purple HTML Mail
const mailOptions = {
  from: process.env.EMAIL_USER || "smartlend25@gmail.com",
  to: borrower.email, // Safeguard for undefined email
  subject: "🎉 Loan Request Submitted Successfully!",
  html: `
    <div style="max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f1f5f9; font-family: Arial, sans-serif; border-radius: 8px; border: 1px solid #cbd5e1;">
      <div style="text-align: center; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0;">
        <h2 style="color: #1e3a8a; margin-bottom: 8px;">🎉 Loan Request Submitted!</h2>
        <p style="color: #334155; font-size: 14px;">Dear <strong style="color: #3b82f6;">${borrower.name}</strong>,</p>
      </div>

      <div style="padding: 20px; background-color: #1e3a8a; border-radius: 6px; margin-top: 20px;">
        <h3 style="color: #f9fafb; font-size: 16px; margin-bottom: 10px;">Loan Details:</h3>
        <p style="color: #dbeafe; font-size: 14px; margin: 5px 0;"><strong>Amount:</strong> ₹${amountRequested}</p>
        <p style="color: #dbeafe; font-size: 14px; margin: 5px 0;"><strong>Interest Rate:</strong> ${interestRate}%</p>
        <p style="color: #dbeafe; font-size: 14px; margin: 5px 0;"><strong>Loan Term:</strong> ${loanTerm} months</p>
        <p style="color: #fef08a; font-size: 14px; margin-top: 10px;"><strong>Status:</strong> <span style="color: #facc15;">Pending</span></p>
      </div>

      <div style="margin-top: 20px; text-align: center;">
        <p style="color: #475569; font-size: 13px;">We will notify you once your loan request is approved. Thank you for choosing <strong style="color: #4b0082;">SmartLend</strong>!</p>
        <a href="https://smartlend.com" style="display: inline-block; background-color: #4b0082; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-size: 14px; margin-top: 12px;">Check Loan Status</a>
      </div>

      <div style="margin-top: 30px; padding-top: 10px; border-top: 1px solid #e2e8f0; text-align: center; color: #94a3b8; font-size: 12px;">
        &copy; 2025 SmartLend. All rights reserved. <br />
        Need help? <a href="mailto:support@smartlend.com" style="color: #3b82f6; text-decoration: none;">Contact Us</a>
      </div>
    </div>
  `,
};


    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });

    res.status(201).json({ message: "Loan request submitted successfully", loan: newLoan });
  } catch (error) {
    console.error("Error requesting loan:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Get Loan Matches
exports.getLoanMatches = async (req, res) => {
  try {
    const { borrowerId } = req.params;
    console.log("Received request for borrowerId:", borrowerId);

    if (!mongoose.Types.ObjectId.isValid(borrowerId)) {
      return res.status(400).json({ message: "Invalid borrower ID format" });
    }

    const loanMatches = await Loan.find({ borrowerId });

    if (!loanMatches.length) {
      return res.status(404).json({ message: "No loan matches found" });
    }

    res.json(loanMatches);
  } catch (error) {
    console.error("Error fetching loan matches:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Get Best Collaborative Funding
exports.getBestCollaborativeFunding = async (req, res) => {
  try {
    const bestLoans = await Loan.find({ status: "Pending" }).sort({ interestRate: 1 }).limit(5);
    res.json(bestLoans);
  } catch (error) {
    console.error("Error fetching collaborative funding:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Fund a Loan by a Lender
exports.fundLoan = async (req, res) => {
  try {
    const { loanId, lenderId, amount, interestRate } = req.body;

    if (!mongoose.Types.ObjectId.isValid(loanId) || !mongoose.Types.ObjectId.isValid(lenderId)) {
      return res.status(400).json({ error: "Invalid loan or lender ID" });
    }

    const loan = await Loan.findById(loanId);
    if (!loan) return res.status(404).json({ error: "Loan not found" });

    const lender = await Lender.findById(lenderId);
    if (!lender) return res.status(404).json({ error: "Lender not found" });

    if (lender.availableFunds < amount) {
      return res.status(400).json({ error: "Lender does not have enough available funds" });
    }

    lender.availableFunds -= amount;
    await lender.save();

    loan.fundedBy.push({ lenderId, amount, interestRate });

    // Calculate the total funded amount
    const totalFunded = loan.fundedBy.reduce((sum, f) => sum + f.amount, 0);

    // Update loan status based on the funded amount
    loan.status = totalFunded >= loan.amountRequested ? "Fully Funded" : "Partially Funded";

    await loan.save();

    res.status(200).json({ message: "Loan funded successfully", loan });
  } catch (error) {
    console.error("Error funding loan:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getBorrowerMatches = async (req,res) => {
  try{
    const {lenderId} = req.params;
    console.log("Lender ID:", lenderId);
    const lender = await Lender.findById(lenderId);
    if (!lender) return res.status(404).json({ message: "Lender not found" });

    console.log("Lender data",lender)

    const eligibleBorrowers = await Borrower.find({
      loanAmount: { $lte: lender.availableFunds},
      loanAmount: { $lte: lender.maxLoanAmount }, // Loan amount should be within Lender's limit
      interestRate: { $gte: lender.minInterestRate }, // Interest rate should be at least what Lender expects
      loanTerm: { $lte: lender.maxLoanTerm }, // Loan term should not exceed Lender's preference
    });

    console.log(eligibleBorrowers)
    
    res.json(eligibleBorrowers);
  }catch(error){
    res.status(500).json({ error: error.message });
  }
};

const Loan = require("../models/loanModel");
const Lender = require("../models/lenderModel");
const Borrower = require("../models/borrowerModel");

exports.getLoanMatches = async (req, res) => {
  try {
    const { borrowerId } = req.params;
    const borrower = await Borrower.findById(borrowerId);
    if (!borrower) return res.status(404).json({ message: "Borrower not found" });

    const matchingLenders = await Lender.find({
      maxLoanAmount: { $gte: borrower.loanAmount },
      minInterestRate: { $lte: borrower.interestRate },
    });

    res.json(matchingLenders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBestCollaborativeFunding = async (req, res) => {
  try {
    const { loanAmount } = req.query;
    const lenders = await Lender.find().sort({ minInterestRate: 1 });

    let bestCombinations = [];
    for (let i = 0; i < lenders.length - 1; i++) {
      for (let j = i + 1; j < lenders.length; j++) {
        if (lenders[i].availableFunds + lenders[j].availableFunds >= loanAmount) {
          bestCombinations.push({
            lenders: [lenders[i], lenders[j]],
            totalRepayment: (lenders[i].availableFunds * lenders[i].minInterestRate) + 
                            (lenders[j].availableFunds * lenders[j].minInterestRate)
          });
        }
      }
    }

    bestCombinations = bestCombinations.sort((a, b) => a.totalRepayment - b.totalRepayment).slice(0, 3);
    res.json(bestCombinations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.fundLoan = async (req, res) => {
  try {
    const { loanId, lenderId, amount, interestRate } = req.body;
    const loan = await Loan.findById(loanId);
    if (!loan) return res.status(404).json({ message: "Loan not found" });

    loan.fundedBy.push({ lenderId, amount, interestRate });

    let totalFunded = loan.fundedBy.reduce((sum, f) => sum + f.amount, 0);
    if (totalFunded >= loan.amountRequested) {
      loan.status = "Fully Funded";
    } else {
      loan.status = "Partially Funded";
    }

    await loan.save();
    res.json(loan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getBorrowerMatches = async (req,res) => {
  try{
    const {lenderId} = req.params;
    const lender = await Lender.findById(lenderId);
    if (!lender) return res.status(404).json({ message: "Lender not found" });

    console.log("Lender data",lender)

    const eligibleBorrowers = await Borrower.find({
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
const Lender = require('../models/lenderModel');
const Borrower = require('../models/borrowerModel');
const admin = require('../config/firebase');

const signup = async (req, res) => {
    try {
        const { uid, fullName, email, phoneNumber, isLender, loanAmount, lenderType } = req.body;

        // Validation: Ensure required fields are provided
        if (!fullName || !email || !phoneNumber) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Check if user already exists in the correct collection
        const existingUser = isLender
            ? await Lender.findOne({ email })
            : await Borrower.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: 'User already exists' });
        }

        if (isLender) {
            // Create new Lender record
            const newLender = new Lender({
                name: fullName,
                email,
                phone: phoneNumber,
                address: null, // Optional fields default to null
                investmentAmount: loanAmount || null,
                loanType: lenderType || null,
                riskPreference: null
            });

            await newLender.save();
            console.log('Lender Profile Created:', newLender);

        } else {
            // Create new Borrower record
            const newBorrower = new Borrower({
                name: fullName,
                email,
                phone: phoneNumber,
                address: null,
                loanAmount: loanAmount || null,
                loanPurpose: null,
                loanTerm: null,
                annualIncome: null,
                creditScore: null,
                bankDetails: {
                    accountNumber: null,
                    ifscCode: null
                },
                documents: []
            });

            await newBorrower.save();
            console.log('Borrower Profile Created:', newBorrower);
        }

        res.status(201).json({ message: 'Signup successful' });
        
    } catch (error) {
        console.error('Error during signup:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const login = async (req, res) => {
    try {
      const { token } = req.body; // Firebase token from frontend
  
      // Verify Firebase token
      const decodedToken = await admin.auth().verifyIdToken(token);
      const { uid, email } = decodedToken;
  
      console.log("Firebase Token Verified:", decodedToken);
  
      // Check if user exists in MongoDB
      const lender = await Lender.findOne({ email });
      const borrower = await Borrower.findOne({ email });
  
      let user;
      let isLender;
  
      if (lender) {
        user = lender;
        isLender = true;
      } else if (borrower) {
        user = borrower;
        isLender = false;
      } else {
        return res.status(404).json({ error: "User not found" });
      }
  
      console.log("👤 User Found in MongoDB:", user);
  
      // Return user data
      res.status(200).json({
        uid,
        email,
        isLender,
        userData: user,
      });
  
    } catch (error) {
      console.error("❌ Login Error:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports = { signup,login };

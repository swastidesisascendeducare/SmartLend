const mongoose = require("mongoose");

const BorrowerSchema = new mongoose.Schema({
  profilePicture: { type: String },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String },
  
  // Loan-related attributes
  age: { type: Number, required: false },
  income: { type: Number, required: false },
  loanAmount: { type: Number, required: false },
  creditScore: { type: Number, required: false },
  loanPurpose: { type: String, required: false },
  loanTerm: { type: Number, required: false },
  dtiRatio: { type: Number, required: false }, // Debt-to-income ratio
  annualIncome: { type: Number },
  interestRate: { type: Number, required: false },
  monthsEmployed: { type: Number, required: false },
  numCreditLines: { type: Number, required: false },

  // Additional Borrower attributes
  education: { type: String, enum: ["High School", "Bachelor's", "Master's", "Doctorate"], required: false },
  employmentType: { type: String, enum: ["Salaried", "Self-Employed", "Unemployed"], required: false },
  maritalStatus: { type: String, enum: ["Single", "Married", "Divorced", "Widowed"], required: false },
  hasMortgage: { type: Boolean, required: false },
  hasDependents: { type: Boolean, required: false },
  hasCosigner: { type: Boolean, required: false },

  // ML Model Loan Approval
  mlApproved: { type: Number, enum: [0, 1], default: 0 }, // 0: No Loan, 1: Approved

  // Banking & Documents
  bankDetails: {
    accountNumber: { type: String },
    ifscCode: { type: String },
  },
  documents: [
    {
      type: { type: String },
      file: { type: String },
    },
  ],
}, { timestamps: true });

// module.exports = mongoose.model("Borrower", BorrowerSchema); //by Vidhi at 12:57 p.m. for borrower Profile

module.exports = mongoose.models.Borrower || mongoose.model("Borrower", BorrowerSchema);


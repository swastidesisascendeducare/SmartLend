const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: "Borrower", required: true },
  amountRequested: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  loanTerm: { type: Number, required: true },
  approvedByML: { type: Boolean, required: true }, // ML decision
  status: { 
    type: String, 
    enum: ["Pending", "Approved", "Partially Funded", "Fully Funded", "Rejected"], 
    default: "Pending" 
  },
  fundedBy: [
    {
      lenderId: { type: mongoose.Schema.Types.ObjectId, ref: "Lender" },
      amount: { type: Number },
      interestRate: { type: Number },
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("Loan", LoanSchema);

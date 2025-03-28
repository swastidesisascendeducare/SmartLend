const mongoose = require("mongoose");

const LenderSchema = new mongoose.Schema(
  {
    profilePicture: { type: String, default: "" },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String, required: false },

    // Investment Details
    availableFunds: { type: Number, required: true, default: 0 }, // Ensuring this is required
    minInterestRate: { type: Number, required: false },
    maxLoanAmount: { type: Number, required: false },
    maxLoanTerm: { type: Number, required: false },
    riskAppetite: { type: String, enum: ["Low", "Medium", "High"], required: false },

    // Bank & Documents
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
  },
  { timestamps: true }
);

module.exports = mongoose.model("Lender", LenderSchema);
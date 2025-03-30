
//const mongoose = require("mongoose");

// const LenderSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   availableFunds: { type: Number, required: true }, // How much lender can fund
//   minInterestRate: { type: Number, required: true }, // Minimum acceptable interest rate
//   maxLoanAmount: { type: Number, required: true }, // Maximum single loan they can fund
//   maxLoanTerm: { type: Number, required: true }, // Max tenure lender is okay with
//   riskAppetite: { type: String, enum: ["Low", "Medium", "High"], required: true },
// }, { timestamps: true });

// module.exports = mongoose.model("Lender", LenderSchema);



////////////////////////////BEFORE 22 MARCH////////////////////////////////////


// const mongoose = require("mongoose");

// const LenderSchema = new mongoose.Schema({
//   profilePicture: { type: String, default: "" },
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   phone: { type: String, required: true },
//   address: { type: String, required: false },

//   // Investment Details
//   availableFunds: { type: Number, required: false }, // Total funds available for lending
//   minInterestRate: { type: Number, required: false }, // Minimum acceptable interest rate
//   maxLoanAmount: { type: Number, required: false }, // Maximum single loan they can fund
//   maxLoanTerm: { type: Number, required: false }, // Maximum tenure lender is okay with
//   riskAppetite: { type: String, enum: ["Low", "Medium", "High"], required: false }, // Risk level lender is okay with

//   // Bank & Documents
//   bankDetails: {
//     accountNumber: { type: String },
//     ifscCode: { type: String },
//   },
//   documents: [
//     {
//       type: { type: String },
//       file: { type: String },
//     },
//   ],
// }, { timestamps: true });

// module.exports = mongoose.model("Lender", LenderSchema);



//////ON 22ND MARCH AT 3:35//////////////////////////////////////

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
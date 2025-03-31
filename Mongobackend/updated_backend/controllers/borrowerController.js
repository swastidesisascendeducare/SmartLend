const Borrower = require("../models/borrowerModel");

// Register a new borrower
const registerBorrower = async (req, res) => {
  try {
    const newBorrower = new Borrower(req.body);
    await newBorrower.save();
    res.status(201).json(newBorrower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get a specific borrower by ID
const getBorrower = async (req, res) => {
  try {
    console.log("Fetching borrower with ID:", req.params.id);
    const borrower = await Borrower.findById(req.params.id);

    if (!borrower) {
      console.log("Borrower not found");
      return res.status(404).json({ message: "Borrower not found" });
    }

    console.log("Borrower fetched successfully:", borrower);
    res.status(200).json(borrower);
  } catch (error) {
    console.error("Error fetching borrower:", error);
    res.status(500).json({ error: error.message });
  }
};

// Apply for a loan
const applyForLoan = async (req, res) => {
  try {
    const borrower = await Borrower.findById(req.params.id);
    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }

    borrower.loanAmount = req.body.loanAmount;
    borrower.loanPurpose = req.body.loanPurpose;
    borrower.loanTerm = req.body.loanTerm;
    await borrower.save();

    res.status(200).json(borrower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get borrower profile
const getBorrowerProfile = async (req, res) => {
  try {
    const borrower = await Borrower.findById(req.params.id);
    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }
    res.status(200).json(borrower);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update borrower profile
const updateBorrowerProfile = async (req, res) => {
  try {
    const borrower = await Borrower.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }

    res.status(200).json(borrower);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete borrower profile
const deleteBorrowerProfile = async (req, res) => {
  try {
    const borrower = await Borrower.findByIdAndDelete(req.params.id);
    if (!borrower) {
      return res.status(404).json({ message: "Borrower not found" });
    }
    res.status(200).json({ message: "Borrower deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get top borrowers based on loan amount
const getTopBorrowers = async (req, res) => {
  try {
    const topBorrowers = await Borrower.find().sort({ loanAmount: -1 }).limit(5);
    res.status(200).json(topBorrowers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Export all controllers correctly
module.exports = {
  registerBorrower,
  getBorrower,
  applyForLoan,
  getTopBorrowers,
  getBorrowerProfile,
  updateBorrowerProfile,
  deleteBorrowerProfile
};



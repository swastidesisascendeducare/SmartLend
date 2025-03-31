const express = require("express");
const router = express.Router();

const {
  registerBorrower,
  getBorrower,
  applyForLoan,
  getTopBorrowers,
  getBorrowerProfile,
  updateBorrowerProfile,
  deleteBorrowerProfile
} = require("../controllers/borrowerController");

// Register a borrower
router.post("/register", registerBorrower);

// Get borrower by ID
router.get("/:id", getBorrower); // Fix applied ✅

// Get borrower profile
router.get("/profile/:id", getBorrowerProfile);

// Update borrower profile
router.put("/profile/:id", updateBorrowerProfile);

// Delete borrower profile
router.delete("/profile/:id", deleteBorrowerProfile);

// Apply for a loan
router.post("/:id/apply-loan", applyForLoan);

// Get top borrowers
router.get("/top", getTopBorrowers);

module.exports = router;

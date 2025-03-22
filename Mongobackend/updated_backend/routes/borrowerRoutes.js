/*
const express = require("express");
const { registerBorrower, getBorrower, applyForLoan, getTopBorrowers } = require("../controllers/borrowerController");

const router = express.Router();

router.post("/register", registerBorrower);
router.get("/top-borrowers", getTopBorrowers); // ✅ Place first to prevent ID conflict
router.get("/:id", getBorrower);
router.post("/apply-loan", applyForLoan);
router.get("/top-borrowers", getTopBorrowers);

module.exports = router;
*/


//final one before borrower profile//////////////////////////////////////////////////////////////////////

// const express = require("express");
// const router = express.Router();
// const { registerBorrower,getBorrower,applyForLoan,getTopBorrowers,getBorrowerProfile, updateBorrowerProfile, deleteBorrowerProfile} = require("../controllers/borrowerController");

// // Borrower routes
// router.post("/register", registerBorrower);
// router.get("/:id", getBorrower);
// router.post("/apply-loan", applyForLoan);
// router.get("/top-borrowers", getTopBorrowers);

// // Borrower Profile routes (merged into borrowerController)
// router.get("/profile/:id", getBorrowerProfile);
// router.put("/profile/:id", updateBorrowerProfile);
// router.delete("/profile/:id", deleteBorrowerProfile);

// module.exports = router;


// const express = require("express");
// const router = express.Router();
// const { 
//   registerBorrower,
//   getBorrower,
//   applyForLoan,
//   getTopBorrowers,
//   getBorrowerProfile,
//   updateBorrowerProfile,
//   deleteBorrowerProfile 
// } = require("../controllers/borrowerController");

// // ✅ Borrower routes
// router.post("/register", registerBorrower);
// // router.get("/:id", getBorrower);
// router.get("/:id", (req, res, next) => {
//     console.log("Borrower ID received in route:", req.params.id);
//     next(); // Pass control to the next handler
//   }, getBorrower);
// router.post("/apply-loan", applyForLoan);
// router.get("/top-borrowers", getTopBorrowers);

// // ✅ Borrower Profile routes
// router.get("/profile/:id", getBorrowerProfile);
// router.put("/profile/:id", updateBorrowerProfile);
// router.delete("/profile/:id", deleteBorrowerProfile);

// module.exports = router;


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

// ✅ Register a borrower
router.post("/register", registerBorrower);

// ✅ Get borrower by ID
router.get("/:id", getBorrower); // Fix applied ✅

// ✅ Get borrower profile
router.get("/profile/:id", getBorrowerProfile);

// ✅ Update borrower profile
router.put("/profile/:id", updateBorrowerProfile);

// ✅ Delete borrower profile
router.delete("/profile/:id", deleteBorrowerProfile);

// ✅ Apply for a loan
router.post("/:id/apply-loan", applyForLoan);

// ✅ Get top borrowers
router.get("/top", getTopBorrowers);

module.exports = router;

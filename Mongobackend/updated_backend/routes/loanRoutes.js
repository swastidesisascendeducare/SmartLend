const express = require("express");
const {
  getLoanMatches,
  getBestCollaborativeFunding,
  fundLoan,
  requestLoan,getLoanDetails, getBorrowerMatches
} = require("../controllers/loanController");

const router = express.Router();

// Loan routes
router.get("/match/:borrowerId", getLoanMatches);
router.get("/best-collaborative", getBestCollaborativeFunding);
router.post("/fund-loan", fundLoan);
router.post("/request-loan", requestLoan);
router.get("/:lenderId", getLoanDetails);
router.get("/get-eligible-borrowers/:lenderId",getBorrowerMatches);

module.exports = router;

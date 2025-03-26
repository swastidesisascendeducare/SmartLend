const express = require("express");
const Loan = require("../models/loanModel"); // Adjust path as needed
const { getLoanMatches, getBestCollaborativeFunding, fundLoan, requestLoan } = require("../controllers/loanController");

const router = express.Router();

router.get("/match/:borrowerId", getLoanMatches);
router.get("/best-collaborative", getBestCollaborativeFunding);
router.post("/fund-loan", fundLoan);
router.post("/request-loan", requestLoan); // by vidhi on 26th March

module.exports = router;
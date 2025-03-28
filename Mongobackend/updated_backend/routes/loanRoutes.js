const express = require("express");

const { getLoanMatches, getBestCollaborativeFunding, fundLoan, requestLoan, getLoanDetails } = require("../controllers/loanController");

const Loan = require("../models/loanModel"); // Adjust path as needed
// const { getLoanMatches, getBestCollaborativeFunding, fundLoan, requestLoan } = require("../controllers/loanController");


const router = express.Router();

router.get("/:lenderId", getLoanDetails);

router.get("/match/:borrowerId", getLoanMatches);
router.get("/best-collaborative", getBestCollaborativeFunding);
router.post("/fund-loan", fundLoan);
router.post("/request-loan", requestLoan); // by vidhi on 26th March

module.exports = router;
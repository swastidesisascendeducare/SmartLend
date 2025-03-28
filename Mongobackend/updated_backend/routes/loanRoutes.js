const express = require("express");
const { getLoanMatches, getBestCollaborativeFunding, fundLoan, getBorrowerMatches } = require("../controllers/loanController");

const router = express.Router();

router.get("/match/:borrowerId", getLoanMatches);
router.get("/best-collaborative", getBestCollaborativeFunding);
router.post("/fund-loan", fundLoan);
router.get("/get-eligible-borrowers/:lenderId",getBorrowerMatches);

module.exports = router;
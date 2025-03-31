const express = require("express");
const { createTransaction, getTransactions, getTransactionById,updateTransaction,deleteTransaction} = require("../controllers/transactionController");

const router = express.Router();

router.post("/create", createTransaction); // Create a new transaction
router.get("/", getTransactions); // Get all transactions
router.get("/:id", getTransactionById); // Get transaction by ID
router.patch("/:id", updateTransaction);
router.delete("/:id", deleteTransaction); // Added delete route


module.exports = router;

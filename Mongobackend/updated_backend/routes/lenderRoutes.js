const express = require("express");
const router = express.Router();
const lenderController = require("../controllers/lenderController");

// ✅ Lender Registration & Fetching
router.post("/register", lenderController.registerLender);
router.get("/:id", lenderController.getLender);

// ✅ Lender Profile Routes
router.get("/profile/:id", lenderController.getLenderProfile);
router.put("/profile/:id", lenderController.updateLenderProfile);
router.delete("/profile/:id", lenderController.deleteLenderProfile);

// ✅ Funds Handling Routes
router.post("/check-funds", lenderController.checkLenderFunds); // Check if lender has enough funds
router.post("/update-funds", lenderController.updateLenderFunds); // Deduct funds after loan approval
router.post("/refund-funds", lenderController.refundLenderFunds); // Refund funds if loan is canceled

module.exports = router;
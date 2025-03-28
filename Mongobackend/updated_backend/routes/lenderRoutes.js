/*
const express = require("express");
const { registerLender, getLenders } = require("../controllers/lenderController");

const router = express.Router();

router.post("/register", registerLender);
router.get("/:id", getLenders);
// router.get("/", getLenders);

module.exports = router;
*/
////////////////before 22nd march////////////

// const express = require("express");
// const router = express.Router();
// const lenderController = require("../controllers/lenderController");

// // Lender routes
// router.post("/register", lenderController.registerLender);
// router.get("/:id", lenderController.getLender);

// // Lender Profile routes (merged into lenderController)
// router.get("/profile/:id", lenderController.getLenderProfile);
// router.put("/profile/:id", lenderController.updateLenderProfile);
// router.delete("/profile/:id", lenderController.deleteLenderProfile);

// module.exports = router;

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
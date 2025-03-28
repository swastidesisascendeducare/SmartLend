/*
const Lender = require("../models/lenderModel");

exports.registerLender = async (req, res) => {
  try {
    const lender = await Lender.create(req.body);
    res.status(201).json(lender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/
/*
exports.getLenders = async (req, res) => {
  try {
    const lenders = await Lender.find();
    res.json(lenders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/
// lenderController.js
/*
exports.getLenders = async (req, res) => {
  try {
    const lender = await Lender.findById(req.params.id);
    if (!lender) {
      return res.status(404).json({ message: "Lender not found" });
    }
    res.json(lender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
*/

///////////////////////////////BEFORE 22ND MARCH//////////////

// const Lender = require("../models/lenderModel");

// // ✅ Register a new Lender
// exports.registerLender = async (req, res) => {
//   try {
//     const lender = await Lender.create(req.body);
//     res.status(201).json(lender);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // ✅ Get Lender by ID
// exports.getLender = async (req, res) => {
//   try {
//     const lender = await Lender.findById(req.params.id);
//     if (!lender) {
//       return res.status(404).json({ message: "Lender not found" });
//     }
//     res.json(lender);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// // ✅ Get Lender Profile by ID
// exports.getLenderProfile = async (req, res) => {
//   try {
//     console.log("Params:", req.params);

//     const { id } = req.params;
//     if (!id) {
//       return res.status(400).json({ error: "Invalid ID provided" });
//     }

//     const lender = await Lender.findById(id);
//     if (!lender) {
//       console.log(`Lender not found for ID: ${id}`);
//       return res.status(404).json({ error: `Lender not found for ID: ${id}` });
//     }

//     res.status(200).json(lender);
//   } catch (error) {
//     console.error("Error fetching lender profile:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Update Lender Profile
// exports.updateLenderProfile = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("Updating profile for ID:", id);

//     const updatedProfile = await Lender.findByIdAndUpdate(id, req.body, { new: true });
//     if (!updatedProfile) {
//       return res.status(404).json({ error: "Lender not found" });
//     }

//     res.status(200).json(updatedProfile);
//   } catch (error) {
//     console.error("Error updating lender profile:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };

// // ✅ Delete Lender Profile
// exports.deleteLenderProfile = async (req, res) => {
//   try {
//     const { id } = req.params;
//     console.log("Deleting profile for ID:", id);

//     const deletedProfile = await Lender.findByIdAndDelete(id);
//     if (!deletedProfile) {
//       return res.status(404).json({ error: "Lender not found" });
//     }

//     res.status(200).json({ message: "Lender profile deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting lender profile:", error.message);
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// };



////////////////////ON 22ND MARCH //////////////////


const Lender = require("../models/lenderModel");

// ✅ Register a new Lender
exports.registerLender = async (req, res) => {
  try {
    const lender = await Lender.create(req.body);
    res.status(201).json(lender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Lender by ID
exports.getLender = async (req, res) => {
  try {
    const lender = await Lender.findById(req.params.id);
    if (!lender) {
      return res.status(404).json({ message: "Lender not found" });
    }
    res.json(lender);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Lender Profile by ID
exports.getLenderProfile = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ error: "Invalid ID provided" });

    const lender = await Lender.findById(id);
    if (!lender) {
      return res.status(404).json({ error: `Lender not found for ID: ${id}` });
    }

    res.status(200).json(lender);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update Lender Profile
exports.updateLenderProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedProfile = await Lender.findByIdAndUpdate(id, req.body, { new: true });
    
    if (!updatedProfile) {
      return res.status(404).json({ error: "Lender not found" });
    }

    res.status(200).json(updatedProfile);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Delete Lender Profile
exports.deleteLenderProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProfile = await Lender.findByIdAndDelete(id);
    
    if (!deletedProfile) {
      return res.status(404).json({ error: "Lender not found" });
    }

    res.status(200).json({ message: "Lender profile deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Check if Lender has enough funds before approving a loan
exports.checkLenderFunds = async (req, res) => {
  try {
    const { lenderId, requestedAmount } = req.body;
    const lender = await Lender.findById(lenderId);

    if (!lender) {
      return res.status(404).json({ error: "Lender not found" });
    }

    if (lender.availableFunds < requestedAmount) {
      return res.status(400).json({ error: "Insufficient funds for this loan" });
    }

    res.status(200).json({ message: "Lender has sufficient funds" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update Lender's Available Funds after funding a loan
exports.updateLenderFunds = async (req, res) => {
  try {
    const { lenderId, fundedAmount } = req.body;
    const lender = await Lender.findById(lenderId);

    if (!lender) {
      return res.status(404).json({ error: "Lender not found" });
    }

    if (lender.availableFunds < fundedAmount) {
      return res.status(400).json({ error: "Not enough funds available" });
    }

    lender.availableFunds -= fundedAmount;
    await lender.save();

    res.status(200).json({ message: "Lender funds updated successfully", updatedFunds: lender.availableFunds });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Refund lender funds (if loan is canceled)
exports.refundLenderFunds = async (req, res) => {
  try {
    const { lenderId, refundedAmount } = req.body;
    const lender = await Lender.findById(lenderId);

    if (!lender) {
      return res.status(404).json({ error: "Lender not found" });
    }

    lender.availableFunds += refundedAmount;
    await lender.save();

    res.status(200).json({ message: "Funds refunded successfully", updatedFunds: lender.availableFunds });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

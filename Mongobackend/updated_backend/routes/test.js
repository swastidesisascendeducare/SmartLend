const express = require('express');
const router = express.Router();
const admin = require('../config/firebase'); // Ensure Firebase is imported correctly

// Test Firebase connection
router.get('/test-firebase', async (req, res) => {
  try {
    // Test Firestore Read/Write
    const testRef = admin.firestore().collection('test').doc('testDoc');
    await testRef.set({ message: 'Firebase connection successful!' });

    const doc = await testRef.get();
    if (doc.exists) {
      res.status(200).json({ success: true, message: doc.data().message });
    } else {
      res.status(404).json({ success: false, message: 'No document found' });
    }
  } catch (error) {
    console.error('🔥 Firebase test error:', error);
    res.status(500).json({ success: false, message: error.message });
  }
});

module.exports = router;

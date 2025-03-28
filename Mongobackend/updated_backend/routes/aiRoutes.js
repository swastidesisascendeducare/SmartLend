const express = require('express');
const router = express.Router();

const { getAgreement } = require('../controllers/aiController')

router.post('/agreement',getAgreement);

module.exports = router;
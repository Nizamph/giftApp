const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const orderGift = require('../controller/orderController');
router.post('/order', auth, orderGift);

module.exports = router;

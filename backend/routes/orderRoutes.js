const express = require('express');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const router = express.Router();
const {
  placeOrder,
  getOrdersToAdmin,
} = require('../controller/orderController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
router.post('/placeOrder', userAuthMiddleware, placeOrder);
router.get('/getOrderFromAdmin', adminAuthMiddleware, getOrdersToAdmin);

module.exports = router;

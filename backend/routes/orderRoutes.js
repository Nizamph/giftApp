const express = require('express');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const router = express.Router();
const {
  placeOrder,
  getOrdersToAdmin,
  updateOrderStatusFromAdmin,
  getOrderToUser,
} = require('../controller/orderController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
router.post('/placeOrder', userAuthMiddleware, placeOrder);
router.get('/getOrderToAdmin', adminAuthMiddleware, getOrdersToAdmin);
router.get('/getOrderToUser', userAuthMiddleware, getOrderToUser);
router.put(
  '/updateOrderStatus',
  adminAuthMiddleware,
  updateOrderStatusFromAdmin
);

module.exports = router;

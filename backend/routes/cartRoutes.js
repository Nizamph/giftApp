const express = require('express');
const router = express.Router();
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
const {
  addItems,
  getAllItems,
  deleteCartItems,
  updateCartItems,
  clearCart,
} = require('../controller/cartController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
router.post('/addItems', userAuthMiddleware, addItems);
router.get('/getCartItems', userAuthMiddleware, getAllItems);
router.delete('/deleteCart', userAuthMiddleware, deleteCartItems);
router.delete('/clearCart', userAuthMiddleware, clearCart);
router.put('/updateCart', userAuthMiddleware, updateCartItems);
module.exports = router;

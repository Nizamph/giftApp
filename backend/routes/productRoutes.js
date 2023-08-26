const express = require('express');
const router = express.Router();
const {
  addProducts,
  getProducts,
  getMyProducts,
} = require('../controller/productController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
router.post('/addProducts', adminAuthMiddleware, addProducts);
router.get('/user/getProducts', userAuthMiddleware, getProducts);
router.get('/admin/getProducts', adminAuthMiddleware, getProducts);
router.get('/admin/getMyProducts', adminAuthMiddleware, getMyProducts);
module.exports = router;

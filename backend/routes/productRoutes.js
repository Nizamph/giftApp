const express = require('express');
const router = express.Router();
const { addProducts, getProducts } = require('../controller/productController');
const adminAuthMiddleware = require('../middleware/adminAuthMiddleware');
const userAuthMiddleware = require('../middleware/userAuthMiddleware');
router.post('/addProducts', adminAuthMiddleware, addProducts);
router.get('/getProducts', userAuthMiddleware, getProducts);
module.exports = router;

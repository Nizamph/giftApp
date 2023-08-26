const Product = require('../models/productModal');
const asyncHandler = require('express-async-handler');

const addProducts = asyncHandler(async (req, res) => {
  try {
    const { name, image, price, deliveredIn, inStock } = req.body;
    if (!name || !image || !price || !deliveredIn) {
      res.status(400).json({
        message: 'please provide sufficient information for adding products',
      });
    }
    const addedProduct = new Product({
      name: name,
      image: image,
      price: price,
      deliveredIn: deliveredIn,
      inStock: inStock,
      adminId: req.user._id,
    });
    const getAddedProduct = await addedProduct.save();
    res.status(201).json({
      addedProduct: getAddedProduct,
    });
  } catch (err) {
    res
      .status(500)
      .json({ message: 'internal server error (admin addProducts)' });
  }
});

const getProducts = asyncHandler(async (req, res) => {
  try {
    if (!req.user._id) {
      res.status(400).json({
        message: 'Authentication failed',
      });
    }
    const getAllProducts = await Product.find({});
    res.status(201).json({
      allProducts: getAllProducts,
    });
  } catch (err) {
    res.status(500).json({
      message: 'internal server error(getting products)',
    });
  }
});

const getMyProducts = asyncHandler(async (req, res) => {
  try {
    if (!req.user._id) {
      res.status(400).json({
        message: 'Authentication failed',
      });
    }
    const products = await Product.find({ adminId: req.user._id });
    res.status(201).json({
      products: products,
    });
  } catch (err) {
    res.status(500).json({
      message: 'internal server error(getting my products)',
    });
  }
});

module.exports = { addProducts, getProducts, getMyProducts };

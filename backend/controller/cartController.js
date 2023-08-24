const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');
const addItems = asyncHandler(async (req, res) => {
  try {
    const { items, totalQuantity, totalAmount } = req.body;
    console.log('request body', req.body);
    if (!items || !totalQuantity || !totalAmount) {
      res.status(400);
      throw new Error('Please add items');
    }
    console.log('user from Cart', req.user);
    const CartData = new Cart({
      userId: req.user._id,
      items: items,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
    });

    const savedCart = await CartData.save();
    // console.log('usersData', usersData);
    res.status(201).json(savedCart);
  } catch (error) {
    res.status(500).json({ message: 'internal server error' });
  }
});

const getAllItems = asyncHandler(async (req, res) => {
  try {
    const allCarts = await Cart.find({ userId: req.user._id });
    console.log('all Cart of the current user ', allCarts);
    res.status(201).json({ allCarts: allCarts });
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
});

const deleteCartItems = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    if (!id) {
      res.status(400).json({ message: 'please provide proper id for delete' });
    }
    const deletedCartItem = await Cart.findOneAndDelete({ _id: id });
    res.status(201).json({ deletedCartItem: deletedCartItem });
  } catch (err) {
    res.status(501).json({ message: 'internal server error' });
  }
});

const updateCartItems = asyncHandler(async (req, res) => {
  try {
    const { id, items, totalQuantity, totalAmount } = req.body;
    if (!id || !items || !totalQuantity || !totalAmount) {
      res.status(400);
      throw new Error('Please provide sufficient data to update');
    }
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: id },
      {
        items: items,
        totalQuantity: totalQuantity,
        totalAmount: totalAmount,
      },
      { new: true }
    );
    res.status(201).json({
      updatedCart: updatedCart,
    });
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
});

module.exports = {
  addItems,
  getAllItems,
  deleteCartItems,
  updateCartItems,
};

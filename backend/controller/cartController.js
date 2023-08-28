const asyncHandler = require('express-async-handler');
const Cart = require('../models/cartModel');
const addItems = asyncHandler(async (req, res) => {
  try {
    const { name, productId, image, occasion, quantity, amount } = req.body;
    console.log('request body', req.body);
    if (!name || !image || !amount || !productId) {
      res.status(400);
      throw new Error('Please add items');
    }
    console.log('user from Cart', req.user);
    const CartData = new Cart({
      userId: req.user._id,
      name: name,
      productId: productId,
      image: image,
      occasion: occasion,
      quantity: quantity,
      amount: amount,
    });
    const savedCart = await CartData.save();
    console.log('usersData', savedCart);
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
    console.log('id from delete', id);
    if (!id) {
      res.status(400).json({ message: 'please provide proper id for delete' });
    }
    const deletedCartItem = await Cart.findOneAndDelete({ _id: id });
    res.status(201).json({ deletedCartItem: deletedCartItem });
  } catch (err) {
    res.status(501).json({ message: 'internal server error' });
  }
});

const clearCart = asyncHandler(async (req, res) => {
  try {
    await Cart.deleteMany({ userId: req.user._id });
    console.log('Cart cleared for the current user');
    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    res.status(500).json({
      message: 'Internal server error',
    });
  }
});

const updateCartItems = asyncHandler(async (req, res) => {
  try {
    console.log('current user', req.user);
    const { id, productId, name, image, occasion, quantity, amount } = req.body;
    if (
      !id ||
      !name ||
      !productId ||
      !image ||
      !quantity ||
      !amount ||
      !occasion
    ) {
      res.status(400);
      throw new Error('Please provide sufficient data to update');
    }
    console.log('id from update cart', id);
    console.log('user from update', req.user);
    const updatedCart = await Cart.findOneAndUpdate(
      { _id: id },
      {
        name: name,
        productId: productId,
        image: image,
        occasion: occasion,
        quantity: quantity,
        amount: amount,
      },
      { new: true }
    );

    console.log('updatedCartData', updatedCart);
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
  clearCart,
};

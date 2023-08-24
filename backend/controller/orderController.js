const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');
const placeOrder = asyncHandler(async (req, res) => {
  try {
    const { items, totalQuantity, totalAmount } = req.body;
    console.log('request body', req.body);
    if (!items || !totalQuantity || !totalAmount) {
      res.status(400);
      throw new Error('Please add items');
    }
    console.log('user from order', req.user);
    const orderData = new Order({
      userId: req.user._id,
      orderFrom: req.user.name,
      items: items,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
    });

    const savedOrder = await orderData.save();
    res.status(201).json({ placedOrder: savedOrder });
  } catch (error) {
    res.status(500).json({ message: 'internal server error' });
  }
});
const getOrdersToAdmin = asyncHandler(async (req, res) => {
  try {
    if (req.user._id) {
      const allOrders = await Order.find({});
      console.log('all orders', allOrders);
      res.status(201).json({ allOrders: allOrders });
    }
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
});

module.exports = { placeOrder, getOrdersToAdmin };

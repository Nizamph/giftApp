const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');
const placeOrder = asyncHandler(async (req, res) => {
  try {
    const { items, totalQuantity, totalAmount, userAddress } = req.body;
    console.log('request body', req.body);
    if (!items || !totalQuantity || !totalAmount || !userAddress) {
      res
        .status(400)
        .res.json({
          errorMessage: 'please add all the required data for order',
        });
      throw new Error('Please add items');
    }
    console.log('user from order', req.user);
    const orderData = new Order({
      userId: req.user._id,
      orderFrom: req.user.name,
      items: items,
      totalQuantity: totalQuantity,
      totalAmount: totalAmount,
      userAddress: userAddress,
    });

    const savedOrder = await orderData.save();
    res.status(201).json({ placedOrder: savedOrder });
  } catch (error) {
    res.status(500).json({ errorMessage: 'something went wrong' });
  }
});
const getOrdersToAdmin = asyncHandler(async (req, res) => {
  try {
    if (req.user._id) {
      const orders = await Order.find({});
      console.log('order to admin', orders);
      res.status(201).json({ ordersToAdmin: orders });
    }
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
});

const getOrderToUser = asyncHandler(async (req, res) => {
  try {
    if (req.user._id) {
      const orders = await Order.find({ userId: req.user._id });
      console.log('order to user', orders);
      res.status(201).json({ orderToUser: orders });
    }
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
});

const updateOrderStatusFromAdmin = asyncHandler(async (req, res) => {
  try {
    const { orderId, newOrderStatus } = req.body;
    const updatedOrder = await Order.findOneAndUpdate(
      { _id: orderId },
      { $set: { orderStatus: newOrderStatus } },
      { new: true }
    );
    res.status(201).json({
      updatedOrder: updatedOrder,
    });
  } catch (err) {
    res.status(500).json({
      message: 'internal server error',
    });
  }
});

module.exports = {
  placeOrder,
  getOrdersToAdmin,
  updateOrderStatusFromAdmin,
  getOrderToUser,
};

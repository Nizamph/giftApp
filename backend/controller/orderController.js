const asyncHandler = require('express-async-handler');
const Order = require('../models/orders');
const addOrder = asyncHandler(async (req, res) => {
  const { items, totalQuantity, totalAmount } = req.body;
  console.log('request body', req.body);
  if (!items || !totalQuantity || !totalAmount) {
    res.status(400);
    throw new Error('Please add items');
  }

  const orderData = await Order.create({
    items: items,
    totalQuantity: totalQuantity,
    totalAmount: totalAmount,
    userId: req.user._id,
  });

  // console.log('usersData', usersData);

  if (orderData) {
    res.status(201).json({
      orderData: orderData,
    });
  } else {
    res.status(400);
    throw new Error('order failed');
  }
});

module.exports = addOrder;

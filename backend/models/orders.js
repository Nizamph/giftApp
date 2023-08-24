const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ordersSchema = mongoose.Schema({
  items: { type: Array, required: true },
  totalQuantity: { type: Number, required: true },
  totalAmount: {
    type: Number,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
const Order = mongoose.model('Order', ordersSchema);
module.exports = Order;

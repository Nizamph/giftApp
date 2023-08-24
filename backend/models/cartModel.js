const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = Schema({
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
const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;

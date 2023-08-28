const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const cartSchema = Schema({
  name: { type: String, required: true },
  productId: { type: String, required: true },
  image: { type: String, required: true },
  occasion: { type: String, required: true },
  quantity: { type: Number, required: true },
  amount: {
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

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({
  name: { type: String, required: true },
  image: {
    type: String,
    required: true,
    default:
      'https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg',
  },
  price: { type: Number, required: true },
  deliveredIn: { type: Number, default: 7, required: true },
  inStock: { type: Number, required: true },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true }, // E.g., 'home', 'electronics', 'deal'
  discount: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  currentPrice: Number,
  priceHistory: [Number],
  sellerRating: Number,
  reviewCount: Number
});

module.exports = mongoose.model("Product", productSchema);
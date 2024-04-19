const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  itemId: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;

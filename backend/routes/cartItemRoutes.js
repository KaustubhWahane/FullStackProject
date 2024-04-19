const express = require('express');
const router = express.Router();
const CartItem = require('../models/cartItemModel');

router.post('/cartItems', async (req, res) => {
  try {
    const { userId, itemId, quantity } = req.body;
    
    const cartItem = new CartItem({
      userId,
      itemId,
      quantity
    });

    await cartItem.save();

    res.status(201).json({ message: 'Cart item saved successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

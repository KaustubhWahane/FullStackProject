const express = require('express');
const router = express.Router();

router.post('/signin', (req, res) => {
  res.status(200).json({ message: 'User signed in successfully' });
});

module.exports = router;

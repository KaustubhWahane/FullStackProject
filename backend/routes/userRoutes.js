const express = require("express");
const router = express.Router();

router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Save data to MongoDB
    // Create a new model for user signin data
    // Save email and password to the database

    // Once signin successful, redirect to home page
    res.status(200).json({ message: "Signin successful", redirect: "/" });
  } catch (error) {
    console.error("Error signin in:", error.message);
    res.status(500).json({ error: "Error during signin" });
  }
});

module.exports = router;

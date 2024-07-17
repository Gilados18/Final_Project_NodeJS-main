// Developers: Gilad Levy - 318176070, Rafi Stern - 308403823
// users.js

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Define the User model (make sure the schema matches your actual user schema)
const User = mongoose.model('User', new mongoose.Schema({
  id: Number,
  first_name: String,
  last_name: String,
  birthday: Date,
  // Add other fields as per your schema
}));

// GET request to get a detailed description of a user by ID
router.get('/:id', async (req, res) => {
  const userId = parseInt(req.params.id);

  try {
    // Find the user by ID
    const user = await User.findOne({ id: userId });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Customize the response format
    const { _id, birthday, ...userDetails } = user.toObject();
    // Format the birthday
    userDetails.birthday = birthday.toISOString().split('T')[0];
    
    res.json(userDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

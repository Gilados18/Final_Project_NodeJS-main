// Developers: Gilad Levy - 318176070, Rafi Stern - 308403823
// about.js


const express = require('express');
const router = express.Router();

// Array of developer objects
const developers = [
  {
    firstname: "Gilad",
    lastname: "Levy",
    id: 318176070,
    email: "giladlevy97@gmail.com"
  },
  {
    firstname: "Rafi",
    lastname: "Stern",
    id: 308403823,
    email: "rafi7992@gmail.com"
  }
];

// GET request to get developers' information
router.get('/', (req, res) =>
{
  res.json(developers);
});

module.exports = router;

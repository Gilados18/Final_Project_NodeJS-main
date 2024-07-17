// Developers: Gilad Levy - 318176070, Rafi Stern - 308403823
// app.js

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const addCalories = require('./addcalories');
const about = require("./about");
const report = require("./report");
const users = require("./users");

// Database Connection
const connectDB = require('./DB');
connectDB();

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/addcalories', addCalories);
app.use("/about", about);
app.use("/report", report);
app.use("/users", users);

// Default route
app.get('/', (req, res) => {
  const htmlContent = `
    <h3>Welcome to our final Final Project in NodeJS</h3>
    <p>To use the API, use the following in the <strong>URL</strong>:</p>
    <ul>
      <li>/addcalories</li>
      <li>/report?<strong>user_id</strong>=XXX&<strong>year</strong>=XXXX&<strong>month</strong>=XX</li>
      <li>/about</li>
      <li>/users/:<strong>id</strong></li>
    </ul>
  `;

  res.send(htmlContent);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));

// Developers: Gilad Levy - 318176070, Rafi Stern - 308403823
// DB.js

const mongoose = require('mongoose');

// MongoDB connection URI
const uri = 'mongodb+srv://giladlevy97:YORLSUioNyArMhe8@cluster0.xcwv24l.mongodb.net/Cluster?retryWrites=true&w=majority';

const connectDB = async () =>
{
  try
  {
    await mongoose.connect(uri);
    console.log('MongoDB connected successfully');
  } catch (error) // any error that occured while attempting to connect to the database
  {
    console.error('MongoDB connection error:', error);
  }
};

module.exports = connectDB;


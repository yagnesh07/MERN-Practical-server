const mongoose = require('../config/db');

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const resultSchema = new mongoose.Schema({
    studentName: {
      type: String,
      required: true
    },
    subject: {
      type: String,
      required: true
    },
    marks: {
      type: Number,
      required: true
    }
  });
  
const Result = mongoose.model('Result', resultSchema);
const User = mongoose.model('User', userSchema);

module.exports = {User, Result};
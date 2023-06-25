const mongoose = require('mongoose')

const schema = mongoose.Schema

const userSchema = new schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 20,
    trim: true,
  },
  Name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 100,
    trim: true,
    },
  passwordHash: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 50,
    trim: true,
  },
  role: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

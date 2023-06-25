const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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

userSchema.pre('save', async function (next) {
  if (this.isModified('passwordHash')) {
      try {
          const salt = await bcrypt.genSalt(10);
          const hash = await bcrypt.hash(this.passwordHash, salt);
          this.passwordHash = hash;
      } catch (error) {
          return next(error);
      }
  }
  next();
});

module.exports = mongoose.model('User', userSchema);

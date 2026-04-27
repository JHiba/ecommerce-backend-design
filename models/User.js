const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true // No two users can share the same email
  },
  password: {
    type: String,
    required: true // pwd will be heavily scrambled/encrypted by bcryptjs!
  },
  role: {
    type: String,
    default: 'user' // If set to 'admin', they will be able to add products!
  }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);

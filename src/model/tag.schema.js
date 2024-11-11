const mongoose = require('mongoose');

const tagSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  color: { type: String, default: 'gray' },
  isActive: { type: Boolean, default: true }
})

module.exports = mongoose.model('tag', tagSchema, 'Tag');

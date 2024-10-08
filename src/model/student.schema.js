const mongoose = require('mongoose');
const { STATUS_AVALIBLE } = require('../utils/constants');

const studentSchema = new mongoose.Schema({
  code: { type: String, require: true },
  name: { type: String, require: true },
  age: { type: Number, require: true },
  special: { type: Boolean, default: false },
  status: {
    type: String, enum: STATUS_AVALIBLE.listToString, default: 'active' },
}, {
  timestamps: true
})

module.exports = mongoose.model('Student', studentSchema, 'student')
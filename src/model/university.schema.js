const mongoose = require('mongoose');
const STATUS_AVALIBLE = ['active', 'inactive', 'deleted'];

const studentSchema = new mongoose.Schema({
  code: { type: String, require: true },
  name: { type: String, require: true },
  age: { type: Number, require: true },
  type: { type: Boolean, default: false },
  status: { type: String, enum: STATUS_AVALIBLE, default: 'active' },
}, {
  timestamps: true
})

module.exports = mongoose.model('Student', studentSchema, 'student')
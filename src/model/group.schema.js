const mongoose = require('mongoose');
const { STATUS_AVALIBLE } = require('../utils/constants');

const tagSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, required: true }
});
const groupSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  description: { type: String, required: false },
  maxMembers: { type: Number, required: true },
  tags: [tagSchema],
  status: {
    type: String,
    enum: STATUS_AVALIBLE.listToString(),
    default: STATUS_AVALIBLE.active
  },
});

module.exports = mongoose.model('group', groupSchema, 'Group');
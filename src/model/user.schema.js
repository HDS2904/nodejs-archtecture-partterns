const { Schema, model } = require('mongoose');
const { STATUS_AVALIBLE, USER_ROLE } = require('../utils/constants');

const userSchema = new Schema({
  // attribute base
  name: { type: String },
  lastName: { type: String },
  age: { type: Number },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: USER_ROLE.listToString(),
    default: USER_ROLE.user
  },
  status: {
    type: String,
    enum: STATUS_AVALIBLE.listToString(),
    default: STATUS_AVALIBLE.active
  },

  // attributes secondary
  group: {
    type: Schema.Types.ObjectId,
    ref: 'group'
  },
}, {
  timestamps: true
})

module.exports = model('user', userSchema, 'User')
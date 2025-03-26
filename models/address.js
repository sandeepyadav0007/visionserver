const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  startAddress: {
    type: String,
    required: true
  },
  destinationAddress: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Address', addressSchema);
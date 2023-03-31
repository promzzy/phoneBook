const mongoose = require("mongoose");

const phonebookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: String,
  email: String,
  createdAt: {
    type: Date,
    default: () => new Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => new Date.now(),
  },
});

module.exports = mongoose.model("phonebook", phonebookSchema);

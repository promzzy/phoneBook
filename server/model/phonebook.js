const mongoose = require("mongoose");

// phone book schema
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
  isFavorite: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("phonebook", phonebookSchema);

const mongoose = require("mongoose");

const phonebookSchema = new mongoose.Schema({
  // id: {
  //   type: "integer",
  //   required: true,
  //   autoIncrement: true,
  // },
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
  // createdAt: {
  //   type: Date,
  //   default: () => new Date.now(),
  // },
  // updatedAt: {
  //   type: Date,
  //   default: () => new Date.now(),
  // },
});

module.exports = mongoose.model("phonebook", phonebookSchema);

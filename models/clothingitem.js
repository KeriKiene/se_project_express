const mongoose = require("mongoose");
const validator = require("validator");

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    maxlength: 30,
  },
  weather: {
    type: String,
    required: true,
    enum: ["hot", "warm", "cold"],
  },
  imageURL: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isURL(v),
      message: "Invalid URL",
    },
  },
});

module.exports = mongoose.model("items", clothingItemSchema);

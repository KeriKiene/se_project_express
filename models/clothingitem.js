const mongoose = require("mongoose");

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlenght: 2,
    maxlength: 30,
  },
});

module.exports = mongoose.model("item", clothingItemSchema);

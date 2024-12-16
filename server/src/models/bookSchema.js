const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  availabiltiy: {
    type: Boolean,
    require: true,
  },
  image: {
    type: String,
    require: true,
  },
});
module.exports = new mongoose.model("Book", bookSchema);

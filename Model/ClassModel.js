const mongoose = require("mongoose");

const ClassSchema = new mongoose.Schema({
  class: { type: String },
  status: { type: Boolean },
  school: { type: String },
});

const Class = mongoose.model("class", ClassSchema);

module.exports = Class;

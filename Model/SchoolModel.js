const mongoose = require("mongoose");

const SchoolSchema = new mongoose.Schema({
  name: { type: String },
  address: { type: String },
  office1: { type: Number },
  office2: { type: Number },
  state: { type: String },
  city: { type: String },
  pincode: { type: Number },
  status: { type: Boolean, default: false },
});

const school = mongoose.model("school", SchoolSchema);

module.exports = school;

const mongoose = require("mongoose");

const TLoginSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  pass: { type: String, required: true },
  ogpass: { type: String, required: true },
  status: { type: Boolean },
  schoolid: { type: String, required: true },
  auth: { type: Boolean },
  startexpired: { type: String },
  expired: { type: String },
});

const TLogin = mongoose.model("alogin", TLoginSchema);

module.exports = TLogin;
``;

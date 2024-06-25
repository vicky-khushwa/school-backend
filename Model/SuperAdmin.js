const mongoose = require("mongoose");

const TLoginSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  pass: { type: String, required: true },
  status: { type: Boolean },
  auth: { type: Boolean },
  expired: { type: Date },
});

const TLogin = mongoose.model("superlogin", TLoginSchema);

module.exports = TLogin;

const mongoose = require("mongoose");
const SectionSchema = new mongoose.Schema({
  section: { type: String },
  status: { type: Boolean },
  school: { type: String },
});

const Section = mongoose.model("section", SectionSchema);

module.exports = Section;

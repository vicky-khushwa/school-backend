const Model = require("../Model/SchoolModel");

// All School for admin
exports.FindAll = async (req, res) => {
  try {
    const find = await Model.find();
    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};

// get school by id for teacher
exports.GetSchoolById = async (req, res) => {
  try {
    const find = await Model.findById(req.params.id);
    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};
// create School for admin
exports.Create = async (req, res) => {
  const data = Model(req.body);
  try {
    const find = await Model.create(data);
    return res.status(200).json({ message: "Create successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};
// update School for admin
exports.Update = async (req, res) => {
  const id = req.params.id;
  const data = Model(req.body);
  try {
    const find = await Model.findByIdAndUpdate(id, data, { new: true });
    return res.status(200).json({ message: "Update successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};
// no use for now
exports.Delete = async (req, res) => {
  const id = req.params.id;
  try {
    const find = await Model.findByIdAndDelete(id);
    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};

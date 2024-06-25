const Model = require("../Model/ClassModel");

// get all class
exports.FindAll = async (req, res) => {
  try {
    const find = await Model.find();
    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};
// get all class by school without true
exports.FindBySchoolAll = async (req, res) => {
  try {
    const find = await Model.find({ school: req.params.school});
    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};
// get all class by school with true
exports.FindBySchoolStatusAll = async (req, res) => {
  try {
    const find = await Model.find({ school: req.params.school,status:req.params.status});
    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};
// create class with school
exports.Create = async (req, res) => {
  const data = Model(req.body);
  try {
    const foundData = await Model.findOne({
      class: data.class,
      school: data.school,
    });
    if (foundData) {
      return res.status(302).json({ message: "Already exist!" });
    }
    const find = await Model.create(data);
    return res.status(200).json({ message: "Create successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};
// update class via school
exports.Update = async (req, res) => {
  
  const data = Model(req.body);  try {
    const find = await Model.findOneAndUpdate(
      { _id: data._id, school: data.school },
      data,
      { new: true }
    );
    return res.status(200).json({ message: "Update successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};
//  no use for now
exports.Delete = async (req, res) => {
  const { id, school } = req.params;
  try {
    const find = await Model.findOneAndDelete({ _id: id, school: school });
    return res.status(200).json({ message: "Delete successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};

const Model = require("../Model/TeacherModel");

// Teacher BY Id for teacher portal
exports.FindById = async (req, res) => {
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
// Teacher By School for admin
exports.getAllTeacherBySchool = async (req, res) => {
  try {
    const find = await Model.find({ schoolid: req.params.school });
    return res.status(200).json(find);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};
// Create Teacher for admin
exports.Create = async (req, res) => {
  const data = Model(req.body);
  try {
    const foundData = await Model.findOne({
      classs: data.classs,
      schoolid: data.schoolid,
      section: data.section,
    });
    if (foundData) {
      return res
        .status(302)
        .json({ error: "Teacher Already exist in this class!" });
    }
    const find = await Model.create(data);
    return res.status(200).json({ message: "Create successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};

//  Update Teacher for admin
exports.Update = async (req, res) => {
  const { id, school } = req.params;
  const data = Model(req.body);

  try {
    const find = await Model.findOneAndUpdate(
      { _id: id, schoolid: school },
      data,
      { new: true }
    );

    return res.status(200).json({ message: "Update successfully", data: find });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Internal Server Error, Refresh and try again !" });
  }
};
// for now no use
exports.Delete = async (req, res) => {
  const id = req.params.id;
  try {
    const find = await Model.findByIdAndDelete(id);
    return res.status(200).json({ message: "Delete successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error, Refresh and try again !" });
  }
};

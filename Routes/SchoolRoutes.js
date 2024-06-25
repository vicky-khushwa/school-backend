const express = require("express");
const controller = require("../Controller/SchoolController");
const Router = express.Router();

Router.get("/:id", controller.GetSchoolById);
Router.get("/", controller.FindAll);
Router.post("/", controller.Create);
Router.put("/:id", controller.Update);
Router.delete("/:id", controller.Delete);

module.exports = Router;

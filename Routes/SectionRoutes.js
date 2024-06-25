const express = require("express");
const controller = require("../Controller/SectionController");
const Router = express.Router();

Router.get("/:school", controller.FindBySchoolAll);
Router.get("/:school/:status", controller.FindBySchoolStatusAll);
Router.post("/", controller.Create);
Router.put("/", controller.Update);
Router.delete("/:id/:school", controller.Delete);

module.exports = Router;

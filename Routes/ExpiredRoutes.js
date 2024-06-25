const express = require("express");
const controller = require("../Controller/ExpiredController");
const Router = express.Router();

Router.post("/:expired", controller.checkExpiredPackage);

module.exports = Router;

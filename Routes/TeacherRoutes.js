const express = require('express')
const Controller = require('../Controller/TeacherController');
const { Route } = require('express');
const Router = express.Router();

Router.post('/',Controller.Create);
Router.get('/:id',Controller.FindById);
Router.put('/:id/:school',Controller.Update);
Router.get("/byschool/:school",Controller.getAllTeacherBySchool)


module.exports = Router
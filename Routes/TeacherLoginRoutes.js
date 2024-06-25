const express = require('express')
const Controller = require('../Controller/TeacherLoginController');
const Router = express.Router();

Router.post('/register',Controller.register);
Router.post('/login',Controller.login);
Router.get('/find/:teacher',Controller.findloger);
Router.post('/forget',Controller.forgetPassword);

module.exports = Router
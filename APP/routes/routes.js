const bodyParser = require('body-parser');
const controller = require('../controllers/controller');
const express = require('express');
const path = require("path");
const auth = require('../controllers/auth');
const DIR_DIST = path.join(__dirname, './dist');
const HTML_STATIC = path.join(DIR_DIST, 'index.html');
//
module.exports = function(app){
  app.use(bodyParser.urlencoded({extended:false}));
  app.use(bodyParser.json())
  app.use(express.static(DIR_DIST));
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  //
  app.route('/').get(controller.getdefault);
  // app.route('/getweights').get(auth, controller.getweights);
  app.route('/getweights').get(controller.getweights);
  app.route('/getemployees').get(controller.getemployees);
  app.route('/addnewemployee').post(controller.addnewemployee);
  app.route('/addnewweight').put(controller.addnewweight);
  app.route('/loginuser').post(controller.loginuser);
  app.route('/getbyname/:employeeName').get(controller.getbyname);
  app.route('/deletebyname/:employeeName').get(controller.deletebyname);
  //
};

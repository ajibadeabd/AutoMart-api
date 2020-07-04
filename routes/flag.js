const Role= require('../src/middleware/userRole')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const userController = require('../src/controller/userController')
const carController = require('../src/controller/carController')
const flagController = require('../src/controller/flagController')
const jwt = require('jsonwebtoken')
// const carController = require('../src/controller/')

/* GET home page. */

// create a new user    --1
router.post(
  '/report/:car_id',
  passport.authenticate('jwt',{session:false}),
   flagController.report);


module.exports=router

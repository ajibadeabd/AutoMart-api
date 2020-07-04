const Role= require('../src/middleware/userRole')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const adminController = require('../src/controller/adminFunctionality')
const jwt = require('jsonwebtoken')
// const carController = require('../src/controller/')

/* GET home page. */

// create a new user (super admin)   --1
router.post(
  '/superAdmin_signIn',
  adminController.superAdminLogin);
// create a new user    (super admin --2
router.post(
  '/superAdmin_signUp',
  passport.authenticate('jwt',{session:false}),
authorize([Role.superAdmin]),
  adminController.superAdminSignUp);
   // create a new user   (admin) --3
router.post(
  '/admin_signUp',
  passport.authenticate('jwt',{session:false}),
authorize([Role.superAdmin]),
  adminController.adminSignUp);
// login an existing  user (admin)    ---4
router.post(
  '/admin_signIn',
  adminController.adminLogin);

module.exports=router

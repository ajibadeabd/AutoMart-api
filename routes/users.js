const Role= require('../src/middleware/userRole')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const userController = require('../src/controller/userController')

/* GET home page. */

// create a new user (buyer)   --1
router.post(
  '/signUp',
   userController.signUp);
// create a new user    --2
router.post(
  '/seller_signUp',
   userController.sellerSignUp);


// login an existing  user     ---3
router.post(
  '/signIn',
   userController.login);
   // forget password
router.post("/forgot_password",  userController.forgotPassword);
//verify email
router.post("/verify_email/:token",  userController.verifyEmail);
// reset password
router.post('/reset_password/:token', userController.resetPassword);
router.get('/fetchProfile',
passport.authenticate('jwt',{session:false}),
userController.fetchProfile);
router.post('/resend_email_verification', userController.ResendVerifyEmail);
module.exports=router

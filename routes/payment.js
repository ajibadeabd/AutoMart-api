const Role= require('../src/middleware/userRole')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const paymentController = require('../src/controller/payment')
const jwt = require('jsonwebtoken')
// const carController = require('../src/controller/')

/* GET home page. */

// create a new user    --1
router.post(
  '/payment/pay/:id',
  passport.authenticate('jwt',{session:false}),
  paymentController.card_payment);
  
router.post(
    '/payment/validate/:car_id',
    passport.authenticate('jwt',{session:false}),
    paymentController.validate_payment);
    
router.get(
    '/payment/validate/:car_id',
    passport.authenticate('jwt',{session:false}),
    paymentController.verify_payment);


module.exports=router

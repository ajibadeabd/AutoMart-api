const Role= require('../src/middleware/userRole')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const userController = require('../src/controller/userController')
const carController = require('../src/controller/carController')
const orderController = require('../src/controller/orderController')
const jwt = require('jsonwebtoken')

// create an order --1
router.post(
    '/order/:id',
    passport.authenticate('jwt',{session:false}),
     orderController.createOrder);
  
  // updated a pending order --2
  router.put(
      '/order/:order_id',
      passport.authenticate('jwt',{session:false}),
       orderController.UpdateOrder);


  module.exports=router
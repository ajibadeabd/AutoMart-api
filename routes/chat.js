const Role= require('../src/middleware/userRole')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const chatController = require('../src/controller/chat')
const jwt = require('jsonwebtoken')
// const carController = require('../src/controller/')

/* GET home page. */

// create a new user    --1
router.post(
  '/sendchat/:id',
  passport.authenticate('jwt',{session:false}),
  chatController.sendchat);

router.post(
    '/fetchChat/:id',
    passport.authenticate('jwt',{session:false}),
    chatController.fetchChat);
  

module.exports=router

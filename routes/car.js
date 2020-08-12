const {Role}= require('../src/middleware/userRole')
const {authorize}= require('../src/middleware/authenticateUser')
var express = require('express');
var passport = require('passport');
var router = express.Router();
const userController = require('../src/controller/userController')
const carController = require('../src/controller/carController')
const orderController = require('../src/controller/orderController')
const multer = require('../src/middleware/multer')("picture");
const jwt = require('jsonwebtoken')
const upload=require("../src/config/multer")


// get all cars with same  body type  --16

router.post(
  '/car/body_type/All'
  ,passport.authenticate('jwt',{session:false}),
 carController.getAllCarsBodyType);



// create a car adds  --3
router.post(
  '/car',
  passport.authenticate('jwt',{session:false}),
authorize([Role.admin,Role.superAdmin,Role.userSeller]),
upload.array('image'),
carController.createCar);

//get all available cars  --4
router.get(
  '/car/available',
  passport.authenticate('jwt',{session:false}),
authorize([Role.userBuyer,Role.userSeller,Role.superAdmin,Role.admin]),
  carController.getAvailableCars)

//getAvailableCarsWithInAPriceRange --5
router.post(
  '/car/price',
  passport.authenticate('jwt',{session:false}),
// authorize([Role.userBuyer,Role.userSeller,Role.superAdmin,Role.admin]),
   carController.getAvailableCarsWithInAPriceRange);


// updated a car ads as sold if available  --8
router.put(
  '/car/:car_Id/sold',
  passport.authenticate('jwt',{session:false}),
authorize([Role.userSeller,Role.superAdmin,Role.admin]),
   carController.updateToSold);

// update a car price by a user (seller)   --9
router.put(
  '/car/:car_id/price',
  passport.authenticate('jwt',{session:false}),
  authorize([Role.userSeller,Role.superAdmin,Role.admin]),
   carController.updatePrice);

//get each car by id  --10
router.get('/car/:eachCar_Id',passport.authenticate('jwt',{
  session:false
}), carController.getEachCar);

//delete each car buy user (seller)  --11
router.delete(
  '/car/:eachCar_Id',
  passport.authenticate('jwt',{session:false}), 
authorize([Role.userSeller,Role.superAdmin,Role.admin]),
  carController.deleteSpecificCar);

// get all cars   --12
router.get('/car',passport.authenticate('jwt',{
  session:false}),
// authorize([Role.superAdmin,Role.admin]),
 carController.getAllCars);

//get all new available manufacturer cars --13
router.get(
  '/manufaturerCar/new/available',
  passport.authenticate('jwt',{session:false}),
  carController.getManAvailableNew);

// get all used available manufacturer cars  --14
router.get(
  '/manufaturerCar/used/available',
  passport.authenticate('jwt',{session:false}),
  carController.getManAvailableUsed);

// get all  available manufacturer cars  --15
router.get(
  '/manufaturerCar/available',
  passport.authenticate('jwt',{session:false}),
   carController.getManAvailable);





module.exports = router;

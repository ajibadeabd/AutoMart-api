var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usemiddleware = require('./src/util/usemiddleware');
const errorMiddleware = require('./src/middleware/errorMiddleware');
// require('express-async-errors')
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
var indexRouter = require('./routes/car');
var oredrRouter = require('./routes/order');
var flagRouter = require('./routes/flag');
var usersRouter = require('./routes/users');

let db =require('./src/config/db')

db.database()
// app. use middleware
usemiddleware(app)
// error middle ware
errorMiddleware(app);
app.on("error", (error) => {
    console.log(`::> an error occiurred in our server: \n ${error}`);
  });





module.exports = app;

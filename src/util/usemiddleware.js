const express = require("express");

const carRouter=require('../../routes/car')
const orderRouter=require('../../routes/order')
const usersRouter=require('../../routes/users')
const flagRouter=require('../../routes/flag')
const morgan = require("morgan");
const passport = require('passport');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var CustomError = require('./CustomError');
const cors = require("cors");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
module.exports=(app)=>{

    app.use(passport.initialize())
    require("../config/passport")(passport)
    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cors());
    app.use('/v1/api', carRouter);
    app.use('/v1/api', usersRouter);
    app.use('/v1/api', orderRouter);
    app.use('/v1/api', flagRouter);
    

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.get('/',(req,res,next)=>{     res.redirect('/api-docs')  })
    //Handle invalid api endpoints

    // error handler
    app.use(function(err, req, res, next) {
      // set locals, only providing error in development
      res.locals.message = err.message;
      res.locals.error = req.app.get('env') === 'development' ? err : {};
    
      // render the error page
      res.status(err.status || 500);
      res.render('error');
    });

    // return app;

}
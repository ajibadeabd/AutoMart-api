const mongoose= require('mongoose')
const Flag= require('../models/flags')
const Car= require('../models/cars')
const  bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const jwtSecret = 'secure'
const CustomError = require('../util/CustomError')
const response = require('../util/response')


class flagServices{

    async  report(data,req){
       const car_id =req.params.car_id

      if(!data.reason) return new CustomError("specify a reason", 400,false);
      if(!data.description) return new CustomError("enter a description", 400,false);
      if(!car_id) return new CustomError("car id can't be null, please specify it", 400,false); 
        let Exist = await Car.findById(car_id)
      if(!Exist) return new CustomError(`car with id  ${car_id} does not exist`, 400,false); 
      else{
        const newReport= await new Flag(data)
        newReport.car_id=car_id
        newReport.seller=Exist.owner
                  await  newReport.save()
                  return{
                    status:201,
                    success:true,
                    data:{
                        id:newReport._id,
                        description:newReport.description,
                        reason:newReport.reason,
                        car_id:newReport.car_id,
                        seller:Exist.owner,
                     }
                  }
                  
      }

           
    }
 
}


module.exports = new flagServices()
const mongoose= require('mongoose')
const User= require('../models/user')
const CustomError= require('../util/CustomError')
const Car= require('../models/cars')
const  bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const jwtSecret = 'mine'
const path = ('path')
const role = require('../middleware/userRole')
const order = require('../middleware/order')
const {state,status}= require('../middleware/carStateStatus')
const _ = require("lodash");
const cloudinary=require("../config/cloudinary")
const fs =require("fs")


// const role = require('../middleware/')
class carServices{
// 1
    async createCar(data,req){
        data=_.pick(data,['status','state','price','model','manufacturer',])
        if(!status.includes(data.status))
         return new CustomError("provide the status", 400,false);
        if(!state.includes(data.state)) 
        return new CustomError("please add the state of the car", 400,false);
        if(!data.price) return new CustomError("please include the price", 400,false);
        if(!data.manufacturer) return new CustomError("provide the manufacturer", 400,false);
        if(!data.model)return new CustomError("provide the model", 400,false);
        const uploader =  async (path)=> await cloudinary.uploads(path,'Images')
            const urls =[]
            if(!req.files)
             return new CustomError("specify the files", 400,false);
                const files = req.files
                for(let i=0; i<files.length; i++){
                    const {path}=files[i]
                    const newPath= await uploader(path)
                    urls.push(newPath)
                    fs.unlinkSync(path)
                }
                const {id,url}=urls
                console.log(url,id)
        data = _.pick(data, ["status",'price',"manufacturer","body_type","model","state"]);
         data.owner= `${req.user.userName}`;
         data.url=urls
        if(!data.body_type) return new CustomError("please include the body type", 400,false);
      
        else{ const carDetails = new Car(data); await carDetails.save()
        return {
            status:200, data:{ success:true, data}}
        }
    }
//2
    async updateToSold(data,req){
        const car_Id= req.params.car_Id;
        let isValid= mongoose.Types.ObjectId.isValid(`${car_Id}`)
        if(!isValid) return new CustomError("provide a valid car id", 400,false);
        let isNotSold = await Car.findOne({_id:car_Id,owner:req.user.userName})
        if(!isNotSold) return new CustomError("you have no access to this product", 400,false);
        else{

            if (isNotSold.status==='sold') 
            return new CustomError("can't update the price of a sold product", 400,false);
            else{
                isNotSold.status= 'sold'
           await isNotSold.save()
            return {
                status:201,
                data:{
                    UpdatedOrder:{
                        id:isNotSold.id,
                        owner:isNotSold.owner,
                        email:req.user.email,
                        state:isNotSold.state,
                        manufacturer:isNotSold.manufacturer,
                        price:isNotSold.price,
                        body_type:isNotSold.body_type,
                        model:isNotSold.model,
                        status:isNotSold.status,
                        createdAt:isNotSold.createdAt,
                    },
                    success:true
                }
            }
            }
            
        }
    } 
    // --3
    async updatePrice(data,req){
        data = _.pick(data, [
            'new_price'
          ]);
        const car_id= req.params.car_id;
        let isValid= mongoose.Types.ObjectId.isValid(`${car_id}`)
        if(!isValid) return new CustomError("provide a valid car id", 400,false);
        const Price= data.new_price
        
        if(!Price) return new CustomError("please specify the new price", 400,false);
        let isExist = await Car.findById(car_id)

        if(!isExist) return new CustomError("car does not exist", 400,false);
        
        let product = await Car.findOne({_id:car_id,owner:req.user.userName})

        if(!product) return new CustomError("you have no access to this product", 400,false);
        else{
            if (product.price===Price)
             return new CustomError("there is no change in price", 400,false);
            else{
                product.price=Price
           await product.save()
            return {
                status:201,
                data:{
                    UpdatedPrice:{
                        id:product.id,
                        owner:product.owner,
                        email:req.user.email,
                        state:product.state,
                        manufacturer:product.manufacturer,
                        price:product.price,
                        body_type:product.body_type,
                        model:product.model,
                        status:product.status,
                        createdAt:product.createdAt,
                    },
                    success:true
                }
            }
            }
            
        }
    }  
    // --4 
    async getEachCar(data,req){
    let id = req.params.eachCar_Id
    let isValid= mongoose.Types.ObjectId.isValid(`${id}`)
    if(!isValid) return new CustomError("provide a valid car id", 400,false);
    if(!id)  return new CustomError("provide the car id", 404,false);

        let eachCar = await Car.findById(id,{__v:0})
        if(!eachCar)  return new CustomError("car not found", 404,false);
        else{
            return {
                status:200,
                data:{
                    id:eachCar.id,
                    owner:eachCar.owner,
                    createdAt:eachCar.createdAt,
                    state:eachCar.state,
                    manufacturer:eachCar.manufacturer,
                    price:eachCar.price,
                    model:eachCar.model,
                    status:eachCar.status,
                    body_type:eachCar.body_type,
                },
                    success:true

            }
        }
    
    
    }
    //5
    async getAvailableCars(data,req){
            let isAvailable = await Car.find({status:"available"})
            if(!isAvailable)  return new CustomError("all cars have been sold",404,false);
            if(isAvailable.length==0) 
             return new CustomError("no car available",404,false);
            else{
                return {
                    status:200,
                    data:{
                        isAvailable
                    },
                        success:true
    
                }
            }
        
        
        }

        //6
        async getAvailableCarsWithInAPriceRange(data,res){
            if(!data.rangeTwo) 
            return new CustomError("provide the second range of price",400,false);
            if(!data.rangeOne)
             return new CustomError("provide the first range of a price", 400,false);
            let isAvailable = await Car.find({status:'available',price:{ $gte: data.rangeOne, $lte: data.rangeTwo}})
            console.log(isAvailable.length)
            if(!isAvailable || isAvailable.length==0) 
             return new CustomError("no cars with in the specified price range", 404,false);
            else{return{ status:200,data:isAvailable} }}
        //7

        async deleteSpecificCar(data,req){
           let eachId=req.params.eachCar_Id
            let isExist = await Car.findOne({_id:eachId})
            if(!isExist) 
             return new CustomError("car does not exist", 404,false);
            
            let wanaDelete = await Car.findOneAndRemove({_id:eachId,owner:req.user.userName})
            if(!wanaDelete) 
             return new CustomError("you can delete an ad u didnt post", 404,false);
            
            else{
                return{
                    status:200,
                    data:'Car ad successfullt deleted'
                }
            
            }
        
        
        }
         //8
        async getAllCars(data,res){
             let getAllCars = await Car.find({},{__v:0})
             if(!getAllCars || getAllCars.length==0)  return new CustomError("there are no car ad", 404,false);
             else{
                 return{
                     status:200,
                     data:getAllCars
                 }
             
             }
         
         
         }
         //9
         async getManAvailableNew(data,res){
             let manufacturer = data.manufacturer
             if(!manufacturer)  return new CustomError("provide the manufacturer", 400,false);
            let getManAvailableNew = 
            await Car.find({status:'available',state:'new',manufacturer:manufacturer})
            if(!getManAvailableNew || getManAvailableNew.length==0) 
             return new CustomError("there are no available and new cars for this manufacture", 404,false);
            
            else{
                return{
                    status:200,
                    data:getManAvailableNew
                }
            
            }

            
        
        
        }
        //10
        async getManAvailableUsed(data,res){
            let manufacturer = data.manufacturer
            if(!manufacturer)  return new CustomError("provide the manufacturer", 400,false);

            let getManAvailableUsed = 
            await Car.find({status:'available',state:'used',manufacturer:manufacturer})
            if(!getManAvailableUsed  || getManAvailableUsed.length==0) 
             return new CustomError("there are no available and used car for this manufacturer", 404,false);
            
            else{
                return{
                    status:200,
                    data:getManAvailableUsed
                }
            
            }
        }

        //11
        async getManAvailable(data,res){
            let manufacturer = data.manufacturer
            if(!manufacturer)  return new CustomError("provide the manufacturer", 400,false);

            let getManAvailable = 
            await Car.find({status:'available',manufacturer:manufacturer})
            if(!getManAvailable || getManAvailable.length==0) 
             return new CustomError("manufacturer has no available cars", 404,false);
            
            else{
                return{
                    status:200,
                    data:getManAvailable
                }
            
            }
        }
        //12

        async getAllCarsBodyType(data,req){
            let bodyType = data.body_type
            if(!bodyType)  return new CustomError("please specify a body type", 400,false);

            let getAllCarsBodyType = 
            await Car.find({body_type:bodyType})
            if(!getAllCarsBodyType || getAllCarsBodyType.length==0) 
             return new CustomError("manufacturer has no available cars", 404,false);
            
            else{
                return{
                    status:200,
                    data:getAllCarsBodyType
                }
            
            }
        }
 
}


module.exports = new carServices()
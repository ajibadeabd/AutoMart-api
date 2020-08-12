const carServices = require("../services/carServices")
const response = require("../util/response")



class carController{

// create a car adds by seller  --1
    async createCar(req,res){
        let  {data ,status,success,message}= await carServices.createCar(req.body,req)
        res.status(status).json({data,success,message})
        
    }
// mark a car ads to sold by seller  --2

    async updateToSold(req,res){
        let  {data ,status,message,success}= await carServices.updateToSold(req.body,req)
        res.status(status).json({data,success,message})

        
    }
// get each car --3

    async getEachCar(req,res){
        let  {data ,status,message,success}= await carServices.getEachCar(req.body,req)
        res.status(status).json({data,success,message})

        
    }
// get available cars   --4

    async getAvailableCars(req,res){
        let  {data ,status,message,success}= await carServices.getAvailableCars(req.body,req)
        res.status(status).json({data,success,message})

        
    }
    //get available cars with in same range --5
    async getAvailableCarsWithInAPriceRange(req,res){
        let  {data ,status,message,success}= 
        await carServices.getAvailableCarsWithInAPriceRange(req.body,res)
        res.status(status).json({data,success,message})



        
    }
    // update  a car price by seller  --6
    async updatePrice(req,res){
        let  {data ,status,message,success} =
         await carServices.updatePrice(req.body,req)
        res.status(status).json({data,success,message})
        
    }
// delete a specific car by seller  --7
    async deleteSpecificCar(req,res){
        let  {data ,status,message,success} =
         await carServices.deleteSpecificCar(req.body,req)
        res.status(status).json({data,success,message})
        
    }
    // get all cars --8
    async getAllCars(req,res){
        let  {data ,status,message,success} =
         await carServices.getAllCars(req.body,req)
        res.status(status).json({data,success,message})
        
    }
    // get all new available manufacturer cars --9
    async getManAvailableNew(req,res){
        let  {data ,status,message,success} =
         await carServices.getManAvailableNew(req.body,req)
        res.status(status).json({data,success,message})
        
    }
    // get all used available manufacturer cars       --10

    async getManAvailableUsed(req,res){
        let  {data ,status,message,success} =
         await carServices.getManAvailableUsed(req.body,req)
        res.status(status).json({data,success,message})
        
    }
    // get all  available manufacturer cars      --11

    async getManAvailable(req,res){
        let  {data ,status,message,success} =
         await carServices.getManAvailable(req.body,req)
        res.status(status).json({data,success,message})
        
    }
    // get all cars with same  body type --12
    async getAllCarsBodyType(req,res){
        let  {data ,status,message,success} =
         await carServices.getAllCarsBodyType(req.body,req)
        res.status(status).json({data,success,message})
        
    }

    
    

}


module.exports = new carController()
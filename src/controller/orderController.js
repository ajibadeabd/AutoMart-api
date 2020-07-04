const orderServices = require("../services/orderServices")



class orderController{


    async createOrder(req,res){
        let  {data,status,message,success} = await orderServices.createOrder(req.body,req)
        res.status(status).json({data,success,message})

    }

    async UpdateOrder(req,res){
        let  {data,status,message,success} = await orderServices.UpdateOrder(req.body,req)
        res.status(status).json({data,success,message})

    }
    

}

module.exports = new orderController()
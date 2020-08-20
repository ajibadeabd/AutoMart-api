const paymentServices = require("../services/payment")

class paymentController{


    async card_payment(req,res){
        let  {data,status,message,success} = await paymentServices.card_payment(req.body,req)
        res.status(status).json({data,success,message})

    }
    async validate_payment(req,res){
        let  {data,status,message,success} = await paymentServices.validate_payment(req.body,req)
        res.status(status).json({data,success,message})

    }
    async verify_payment(req,res){
        let  {data,status,message,success} = await paymentServices.verify_payment(req.body,req)
        res.status(status).json({data,success,message})

    }
}

module.exports = new paymentController()
const userServices = require("../services/userServices")
const response = require("../util/response")



class userController{


    async signUp(req,res){
        let  {data,success,status,message} = await userServices.signUp(req.body,res)
    res.status(status).json({message, data,success});
    }

    async sellerSignUp(req,res){
        let  {data,success,status,message} = await userServices.sellerSignUp(req.body,res)
    res.status(status).json({message, data,success});
    }
    async login(req,res){
        let   {data,success,status,message} = await userServices.login(req.body,res)
    res.status(status).json({message, data,success});
    }

}

module.exports = new userController()
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
    async resetPassword(req,res){
        let   {data,success,status,message} = await userServices.resetPassword(req,res)
    res.status(status).json({message, data,success});
    }

    async forgotPassword(req,res){
        let   {data,success,status,message} = await userServices.forgotPassword(req.body,res)
    res.status(status).json({message, data,success});
    }
    async verifyEmail(req,res){
        let   {data,success,status,message} = await userServices.verifyEmail(req,res)
    res.status(status).json({message, data,success});
    }

}

module.exports = new userController()
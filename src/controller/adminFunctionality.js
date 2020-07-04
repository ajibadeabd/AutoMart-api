const adminServices = require("../services/adminServices")
const response = require("../util/response")



class adminController{


    async superAdminSignUp(req,res){
        let  {data,success,status,message} = await adminServices.superAdminSignUp(req.body,res)
    res.status(status).json({message, data,success});
    }

    async superAdminLogin(req,res){
        let  {data,success,status,message} = await adminServices.superAdminLogin(req.body,res)
    res.status(status).json({message, data,success});
    }
    async adminSignUp(req,res){
        let  {data,success,status,message} = await userServices.adminSignUp(req.body,res)
    res.status(status).json({message, data,success});
    }
    async adminLogin(req,res){
        let  {data,success,status,message} = await userServices.adminSignUp(req.body,res)
    res.status(status).json({message, data,success});
    }
}

module.exports = new adminController()
const flagServices = require("../services/flagServices")
class flagController{


    async report(req,res){
        let  {data,status,message,success} = await flagServices.report(req.body,req)
        res.status(status).json({data,success,message})

    }
}

module.exports = new flagController()
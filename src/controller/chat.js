const chatServices = require("../services/chat")

class chatController{


    async sendchat(req,res){
        let  {data,success,status,message} = await chatServices.sendchat(req.body,req)
    res.status(status).json({message, data,success});
    }
    

    async fetchChat(req,res){
        let  {data,success,status,message} = await chatServices.fetch(req.body,req)
    res.status(status).json({message, data,success});
    }
    
}

module.exports = new chatController()
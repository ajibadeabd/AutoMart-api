const mongoose= require('mongoose')
const  bcrypt = require('bcryptjs')
const  {pick} = require('lodash')
const  jwt = require('jsonwebtoken')
const  Chat = require('../models/chat')
const CustomError = require('../util/CustomError')


class chat{

    async  sendchat(data,req){
        const you= req.user.id
        const other= req.params.id
        data=pick(data,['body'])
        let body=data.body
        const saveMessage = new Chat({you,other,body})
        let saveM = await saveMessage.save()
        if(!saveM) return new CustomError('error occur while sending message')
            return {status:201,success:true,message:'message sent'}           
    }
    async  fetch(data,req){
        const you= req.user.id
        const other= req.params.id
        let fetch = await Chat.find({you:you,other:other},{_id:0,__v:0})
                        // .select('body')
                        .populate('you','userName','User')
                        .populate('other','userName','User')
        if(!fetch) return new CustomError('error occur while fetching message')
            return {success:true,status:200,message:'message fetch',data:fetch}           
    }
 
}


module.exports = new chat()

// const userSchema = (joi) => ({
//     userSchema: joi.object().keys({
//       name: joi.string().regex(/^[a-bA-B]+/).required(),
//       lastName: joi.string().regex(/^[a-bA-B]+/).required(),
//       email: joi.string().email().required(),
//       phoneNumber: joi.string().regex(/^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/),
//       creditCard: joi.string().creditCard().required(),
//       membership: joi.number().creditCard()
//     })
//   })
  
//   module.exports = userSchema
const mongoose= require('mongoose')
const User= require('../models/user')
const  bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const jwtSecret = 'secure'
const CustomError = require('../util/CustomError')
const response = require('../util/response')
const {Role} = require('../middleware/userRole')
const _ = require("lodash");



class userServices{

    async  signUp(data,res){
      // console.log(data)
      if(!data.email) return new CustomError("enter your email", 400,false);
      if(!data.password) return new CustomError("enter your password", 400,false);
      if(!data.con_password) return new CustomError("please confirm  your password", 400,false);
      if(!data.userName) return new CustomError("enter your userName", 400,false); 
     if(data.password  !== data.con_password) return new CustomError("password dont match", 400,false);  
     if(await User.findOne({userName:data.userName})) return new CustomError("userName already Taken", 400,false); 
      if(await User.findOne({email:data.email})) return new CustomError("email already exist", 400,false); 
      else{
        const newUser= await new User(data)
        newUser.email= data.email.trim('')
        const token = jwt.sign({ id: newUser._id,role:newUser.role }, jwtSecret, { expiresIn: 3600000000, });
        newUser.token=`Bearer ${token}`
        // send mail to user email
                  await  newUser.save()
                  return{
                    status:201,
                    success:true,
                    data:{
                      token:newUser.token,
                      msg:'you have succefully registerd, a message has been sent to your mail, please confirn '
                    }
                  }
                  
      }
     
    }

    async  sellerSignUp(data,res){
      // console.log(data)
      if(!data.email) return new CustomError("enter your email", 400,false);
      if(!data.password) return new CustomError("enter your password", 400,false);
      if(!data.con_password) return new CustomError("please confirm  your password", 400,false);
      if(!data.userName) return new CustomError("enter your userName", 400,false); 
     if(data.password  !== data.con_password) return new CustomError("password dont match", 400,false);  
      if(await User.findOne({email:data.email})) return new CustomError("email already exist", 400,false); 
      if(await User.findOne({userName:data.userName})) return new CustomError("userName Taken", 400,false); 
      else{
        const newUser= await new User(data)
        newUser.email= data.email.trim('')
        const token = jwt.sign({ id: newUser._id,role:newUser.role }, jwtSecret, { expiresIn: 3600000000, });
        newUser.token=`Bearer ${token}`
        newUser.role=Role.userSeller
        // send mail to user email
                  await  newUser.save()
                  return{
                    status:201,
                    success:true,
                    data:{
                      token:newUser.token,
                      msg:'you have succefully registerd, a message has been sent to your mail, please confirn '
                    }
                  }
                  
      }
     
    }


    
    async login(data,res){
        if(!data.email)  return new CustomError("provide an email", 400,false); 
        if(!data.password) return new CustomError("provide a password", 400,false); 
        let user =await User.findOne({email:data.email})
          if(!user) return  new CustomError("no user found", 404,false); 
          const isCorrect = await bcrypt.compare(data.password, user.password);
        if(!isCorrect) return new CustomError("password dont match", 400,false); 
        else{ let payload={ userName:user.userName, _id:user._id,role:user.role, email:user.email,}
        const token = jwt.sign(payload, jwtSecret, {expiresIn: 3600000000000000 });
          const refreshToken = jwt.sign(payload, jwtSecret, {expiresIn: 3600000000000 });
         
    user = _.pick(user, [
      "_id",
      'userName',
      "email",
      "role",
    ]);
          return{success:true,  status:200, data:{msg:'you suucessfully logged in',
          // user:user.userName,email:user.email,user_Id:user._id,  role:user.role,
          ...user,
          token:`Bearer ${token}`, refreshToken:`Bearer ${refreshToken}`,}} 
        }
        
    }
}


module.exports = new userServices()
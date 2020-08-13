const mongoose= require('mongoose')
const User= require('../models/user')
const  bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const Crypto = require("crypto");
const CustomError = require('../util/CustomError')
const response = require('../util/response')
const {Role} = require('../middleware/userRole')
const _ = require("lodash");
const Email = require("../util/mailSender");
const dotenv = require('dotenv')
 dotenv.config()



class userServices{

    async  signUp(data,res){
      data=_.pick(data,['email','password','con_password','userName'])

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
        const token = jwt.sign({ id: newUser._id,role:newUser.role },  process.env.jwtSecret, { expiresIn: 3600, });
        const liveUrl = `https://automart.com/verify-email/${token}`;
        const url = `http://localhost:3000/verify-email/${token}`;
      await new Email(data, liveUrl).verify_email();
      await new Email(data, url).verify_email();
        // send mail to user email
                  await  newUser.save()
                  return{status:201,success:true,data:{
                      token:newUser.token,
                      msg:'you have succefully registerd, a message has been sent to your mail, please click on the link verify your email '
                    }
                  }
                  
      }
     
    }

    async  sellerSignUp(data,res){
    data=_.pick(data,['email','password','con_password','userName'])

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
        newUser.role=Role.userSeller
        const token = jwt.sign({ id: newUser._id,role:newUser.role },  process.env.jwtSecret, { expiresIn: 3600, });
        const liveUrl = `https://automart.com/verify-email/${token}`;
        const url = `http://localhost:3000/verify-email/${token}`;
      await new Email(data, liveUrl).verify_email();
      await new Email(data, url).verify_email();
        // send mail to user email
                  await  newUser.save()
                  return{
                    status:201,
                    success:true,
                    data:{
                      token:newUser.token,
                      msg:'you have succefully registerd, a message has been sent to your mail, please click on the link verify your email '
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
          // console.log(user.isEmailVerified)
          if(!user.isEmailVerified) return new CustomError("Account not verify pls verify your email", 400,false); 
          if(!user.block) return new CustomError("your account has been blocked please contact the Admin", 400,false); 
          if(!isCorrect) return new CustomError("password dont match", 400,false); 

        else{ let payload={ userName:user.userName, _id:user._id,role:user.role, email:user.email,}
        const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn: 600 });
          const refreshToken = jwt.sign(payload,process.env.jwtSecret, {expiresIn: 360000000000 });
         
    user = _.pick(user, [
      "_id",
      'userName',
      "email",
      "role","block","isEmailVerified"
    ]);
          return{success:true,  status:200, data:{msg:'you sucessfully logged in',
          // user:user.userName,email:user.email,user_Id:user._id,  role:user.role,
          ...user,
          token:`Bearer ${token}`, refreshToken:`Bearer ${refreshToken}`,}} 
        }
        
    }
    async forgotPassword(data,res){
      if(!data.email) return new CustomError("please enter an email");
      const userExist = await User.findOne({
        email: data.email,
      });
      if (!userExist) return new CustomError("user does not exists");
  
     let token =  Crypto.randomBytes(20).toString('hex')
    //  console.log(token)
     if(!token ) return new CustomError("there was an erro in cteating a token ");
     userExist.resetPasswordToken = token;
     userExist.resetPasswordExpires = Date.now() + 3600000; // 1 hour
     userExist.save()
     const liveUrl = `https://automart.com/reset-password/${token}`;
     const url = `http://localhost:3000/reset-password/${token}`;
   await new Email(data, liveUrl).resetPassword();

    //  await new Email(req.body, liveUrl).resetPassword();
     return{status:200,success:true, message:"a message has been sent to your mail",data:null}
      
  }


  async resetPassword(req,res){
    const valid = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });
    if (!valid) {
      return new CustomError(" Password reset token is invalid or has expired'");
    }
   
    if(!req.body.password ) return new CustomError("please enter you password ");
    if(!req.body.confirmPassword) 
    return new CustomError("confirm your  password ");
    if (req.body.password!==req.body.confirmPassword)
    return new CustomError("password dont match");
    valid.password = req.body.password;

    valid.resetPasswordToken = undefined;
    valid.resetPasswordExpires = undefined;
    await valid.save();
    return {data:null,success:true};
    
  }
  async verifyEmail(req,res){
    let id = req.params.token
    let verify = await jwt.decode(id,process.env.jwtSecret)
   if((Date.now()<verify.exp))    return new CustomError(" verification token has expired'");
    let isExist = await User.findById(verify.id)
   if(!isExist) return new CustomError("you cant verify an account that does not exist");
   if(isExist.isEmailVerified==true) return new CustomError(" this account has already been verified, proceded to log in");
     isExist.isEmailVerified=true;
     isExist.save()
    return {success:true,status:200,data:null,message:'your account has been verified, please login '}
    
}
async ResendVerifyEmail(req,res){
  let   data=_.pick(req.body,['email'])
  let isExist =  await User.findOne({email:data.email})
  if(!isExist) return new CustomError(" You do not have an account with us");
  const token = jwt.sign({ id: isExist._id,role:isExist.role }, process.env.jwtSecret, { expiresIn: 3600, });
  const liveUrl = `https://automart.com/verify-email/${token}`;
  const url = `http://localhost:3000/verify-email/${token}`;
await new Email(data, liveUrl).verify_email();
await new Email(data, url).verify_email();
console.log(token)
  return {success:true,status:200,data:null,message:'A link to verify your account has been sent '}
  
}
}


module.exports = new userServices()
const mongoose= require('mongoose')
const  Order = require('../models/order')
const  bcrypt = require('bcryptjs')
const CustomError = require('../util/CustomError')
const {pay,validate_payment,verify_payment} = require('../util/payment')
const key = process.env.FLUTTERWAVE_ENCRYPT_KEY;


class payment{

    async card_payment(data, req) {
        //verify card details
          const verifyCard = pay(key,data)
          if(verifyCard.status==false){

          }else{
            return verifyCard
          }
      }
       // payment validation
  async validate_payment(data, req) {
    let adsId = req.params.adsId
    let adsIdExist = await Order.findById(adsId)
    if (!adsIdExist)
     { return new CustomError("Order does not exist", 404); }
    let { flw_ref, otp } = data;
    if (!otp) { return new CustomError("please provide the otp", 400); }
    if (!flw_ref) { return new CustomError("please provide the ref-number", 400); }
    otp = parseInt(otp);
    const validatePayment =   validate_payment(flw_ref,otp)
    if(validatePayment.status==false){

    }else{return  validatePayment

    }
  }
  async verify_payment(data,req) {
    let verify = verify_payment(token)
}
 
}


module.exports = new payment()
 
 

 
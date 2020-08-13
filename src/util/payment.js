const axios = require('axios')
const secret_key = process.env.FLUTTERWAVE_SECRET_KEY;
const {encrypt} = require('./encryptPaymentData')

class paymentAction{
    async pay(key,data){
        let enc = encrypt(key, data);
        const payment = await axios({
            method: "post",
            url: "https://api.flutterwave.com/v3/charges",
            responseType: "json",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${secret_key}`,
            },
            params: { type: "card" },
            data: { client:enc },
          });
          if (payment.data.status === "error") {return { status:false}
          } else {
            return { flw_ref: payment.data.data.flw_ref,
              campaignId: campaignId, amount: data.amount,status:true
               }
          }
    }
    async validate_payment(flw_ref,otp){
        const validate_payment = await axios({
            method: "post",
            url: "https://api.flutterwave.com/v3/validate-charge",
            responseType: "json",
            headers: {
              "content-type": "application/json",
              Authorization: `Bearer ${secret_key}`,
            },
            data: { flw_ref, otp}
          })
if (validate_payment.data.data.status === "successful") {
    return { validation_id: validate_payment.data.data.id,status:true}
}else{
    return {status:false}

}

       
    }
    async verify_payment(token) {
        //checking if data provided is valid
        const id = token;
        if (!id) throw new CustomError("id is not define, please provide", 400);
        const verify_payment = await axios({
          method: "get",
          url: `https://api.flutterwave.com/v3/transactions/${id}/verify`,
          responseType: "json",
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${secret_key}`,
          },
        });
        if (verify_payment.data.data.status === "successful") {
          return { Transaction_id: verify_payment.data.data }
        } else {
          return { status:false }

        }
      }
}


module.exports = new paymentAction()


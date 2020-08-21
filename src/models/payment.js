const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PaymentSchema = new Schema({
  
  paymentId: {
    type: String,
    required: true 
  },
  userId: {
    type: String,
    required: true 
  },
  seller: {
    type: String,
    required: true
  },
  success: {
    type: Boolean,
    default:false 
  },
  },
 {
  timestamps: true,
});

module.exports = mongoose.model("Payment", PaymentSchema);

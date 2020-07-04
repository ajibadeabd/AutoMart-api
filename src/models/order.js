const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  buyer: {
    type: String,
    required: true,
    minlength: 3,
    // select: false, // Couldn't login in with this
  },
 car_id: {
    type: String,
    required: true
  },

  price: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [ "available","sold"],
    default: "available"
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});




module.exports = mongoose.model("Order", OrderSchema);

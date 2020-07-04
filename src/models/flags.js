const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const FlagSchema = new Schema({
  car_id: {
    type: String,
    required: true,
  },
  
 
  
  reason: {
    type: String,
    required: true,

  },
  created_on: {
    type: Date,
    default: Date.now,
  },
  seller:{
    type: String,
    required: true,

  },

  description: {
    type: String,
    required: true,

  }
})

module.exports = mongoose.model("Flag", FlagSchema);

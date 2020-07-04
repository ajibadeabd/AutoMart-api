const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const CarSchema = new Schema({
  
  owner: {
    type: String,
    required: true,
    
  },
  state: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: [ "available","sold"],
    default: "available"
  },
  price: {
    type: Number,
    required: true
  },
  manufacturer: {
    type: String,
    require: true,
  },
  model: {
    type: String,
    require: true,
  },
 body_type: {
    type: String,
  
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

});


module.exports = mongoose.model("Car", CarSchema);

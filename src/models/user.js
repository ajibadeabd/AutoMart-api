const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  password: {
    type: String,
    required: true,
  
  },

  token: {
    type: String,
    // required: true,
  },
  role: {
    type: String,
    enum: ["userSeller","userBuyer", "admin","superAdmin"],
    default: "userBuyer"
  },
  block: {
    type: Number,
    default: 0
  },

  status: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  // isEmailVerified: {
  //   type: Boolean,
  //   default: false
  // }
});

// Encrypt password using bcrypt

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", UserSchema);

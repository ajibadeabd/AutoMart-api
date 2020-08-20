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
    trim: true,
    required: [true, "Email is required"],
    unique: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
  },
  password: {
    type: String,
    required: true,
  
  },

 
  role: {
    type: String,
    enum: ["userSeller","userBuyer", "admin","superAdmin"],
    default: "userBuyer"
  },
  photoURL: {
    type: String,
    default:
      "https://f0.pngfuel.com/png/340/956/profile-user-icon-png-clip-art-thumbnail.png",
  },
  block: {
    type: Number,
    default: 0
  },
  resetPasswordToken: String,
  resetPasswordExpires: Date,
  status: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },

  isEmailVerified: {
    type: Boolean,
    default: false
  }
});

// Encrypt password using bcrypt

UserSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

module.exports = mongoose.model("User", UserSchema);

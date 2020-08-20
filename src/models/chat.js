const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ChatSchema = new Schema({
  you: {
     type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  other: {
    type: Schema.Types.ObjectId,
   ref: "User",
   required: true
  },
  body: {
    type: String,
    required: true 
  },
 });

module.exports = mongoose.model("Chat", ChatSchema);

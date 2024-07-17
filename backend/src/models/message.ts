import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    chatId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Chat"
    },
    author: {
      type: mongoose.Schema.ObjectId,
      required:true,
      ref:"User"
    },
    content: {
      type:String,
      required:true
    },
  }, {timestamps:true}
)

const Message = mongoose.model("Message", messageSchema)

export default Message

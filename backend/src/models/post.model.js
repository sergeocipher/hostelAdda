import {mongoose, Schema} from "mongoose";

const PostType = ["ORDER", "BULK_OFFER", "BORROW"];
const PostStatus = ["OPEN", "ORDERED", "CLOSED", "CANCELLED", "EXPIRED"];
const timeStatus = []

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    type: { 
      type: String, 
      enum: PostType, 
      required: true 
    },
    description: {
      type: String,
      required: true,
    },
    status: { 
      type: String, 
      enum: PostStatus, 
      default: "OPEN" 
    },
    expireAt: {
      type: Date,
      required: true,
    },
    room:{
      type: String, 
      enum: ["Uniworld-1" , "Uniworld-2" , "college"],
      required: true
    },
    minAmount: {
      type: Number,
      required: false,
      default: 0,
    },
    timeline:[
      {
          status: {
            type: String ,
            enum: timeStatus ,
            required: true
          },
          updatedAt:{
            type: Date, 
            default: Date.now
          }, 
          updatedBy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
          }
      }
    ],
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    participants: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  { timestamps: true }
);

const Post =  mongoose.model("Post", postSchema);
export default Post

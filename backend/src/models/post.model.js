import {mongoose, Schema} from "mongoose";

const PostType = ["ORDER", "BULK_OFFER", "BORROW"];
const PostStatus = ["OPEN", "ORDERED", "CLOSED", "CANCELLED", "EXPIRED"];

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
    minAmount: {
      type: Number,
      required: false,
      default: 0,
    },
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

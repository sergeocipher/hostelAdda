import {mongoose, Schema} from "mongoose";


const PostType = ["ORDER", "BULK_OFFER", "BORROW"];
const PostStatus = ["OPEN", "ORDERED", "CLOSED", "CANCELLED", "EXPIRED"];

const postSchema = new Schema(
  {
    title: { type: String, required: true },
    description: String,
    type: { type: String, enum: PostType, required: true },
    status: { type: String, enum: PostStatus, default: "OPEN" },
    platform: String,
    externalUrl: String,
    expireAt: Date,
    maxParticipants: Number,
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
  },
  { timestamps: { createdAt: "createdAt" } }
);

const Post =  mongoose.model("Post", postSchema);
export default Post


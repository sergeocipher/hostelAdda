import {mongoose , Schema} from "mongoose";

const notificationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    type: { type: String, required: true },
    payload: Schema.Types.Mixed,
    read: { type: Boolean, default: false },
  },
  { timestamps: { createdAt: "createdAt" } }
);

const notification = mongoose.model("notification" , notificationSchema)
export default notification;
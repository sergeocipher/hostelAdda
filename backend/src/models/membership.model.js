import { mongoose , Schema } from "mongoose";

const membershipSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    room: { type: Schema.Types.ObjectId, ref: "Room", required: true },
    role: { type: String, default: "MEMBER" }, // MEMBER / MODERATOR / OWNER
    joinedAt: { type: Date, default: Date.now },
  },
  { timestamps: false }
);

const Membership = mongoose.model("Membership", membershipSchema);
export default Membership;
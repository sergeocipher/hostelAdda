import {mongoose , Schema} from "mongoose";


const roomSchema = new Schema(
  {
    name: { type: String, required: true },
    hostel: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: { createdAt: "createdAt" } }
);

const room = mongoose.model("Room", roomSchema);
export default room;
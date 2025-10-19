import {mongoose , Schema }from "mongoose";


const ParticipationStatus = ["INTERESTED", "CONFIRMED", "REMOVED"];

const participationSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    status: {
      type: String,
      enum: ParticipationStatus,
      default: "INTERESTED",
    },
    items: Schema.Types.Mixed, 
  },
  { timestamps: { createdAt: "createdAt" } }
);

const participation = mongoose.model("Participation", participationSchema);
export default participation 
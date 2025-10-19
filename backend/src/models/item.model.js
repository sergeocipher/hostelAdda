import { mongoose , Schema } from "mongoose";

const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    quantity: { type: Number, default: 1 },
    price: Number,
    note: String,
    owner: { type: Schema.Types.ObjectId, ref: "User" },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
  },
  { timestamps: { createdAt: "createdAt" } }
);

const Item = mongoose.model("Item", itemSchema);
export default Item
import mongoose from "mongoose";
import { Schema } from "mongoose";

const dropSchema = new Schema(
  {
    image: String,
    date: String,
    brand: String,
    modeleName: String,
    color: String,
    price: Number,
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  },
  { timestamps: true }
);

const Drop = mongoose.model("Drop", dropSchema);

export default Drop;

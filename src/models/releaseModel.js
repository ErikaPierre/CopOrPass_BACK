import mongoose from "mongoose";
import { Schema } from "mongoose";

const releaseSchema = new Schema(
  {
    image: String,
    dateRelease: String,
    brand: String,
    modeleName: String,
    color: String,
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  },
  { timestamps: true }
);

const Release = mongoose.model("Release", releaseSchema);

export default Release;

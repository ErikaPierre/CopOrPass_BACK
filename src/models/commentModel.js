import mongoose from "mongoose";
import { Schema } from "mongoose";

const commentSchema = new Schema(
  {
    userName: String,
    title: String,
    content: String,
    products: [{ type: Schema.Types.ObjectId, ref: "products" }],
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);

export { Comment };

import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema(
  {
    image: String,
    dateRelease: String,
    brand: String,
    modeleName: String,
    color: String,
    price: Number,
    comments: [{ type: Schema.Types.ObjectId, ref: "comments" }],
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product };

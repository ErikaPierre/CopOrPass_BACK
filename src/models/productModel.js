import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema(
  {
    image: String,
    dateRelease: String,
    name: String,
    modeleName: String,
    color: String,
    price: Number,
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

export { Product };

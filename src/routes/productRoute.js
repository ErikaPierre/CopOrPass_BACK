import Router from "express";
import uploadImage from "../middlewares/multer";
import { auth } from "../middlewares/auth";

import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getOneProduct,
} from "../controllers/productController";

const productRouter = Router();

productRouter.get("/all-releases", getAllProducts);
productRouter.get("/all-drops", getAllProducts);
productRouter.get("/get-one/:id", getOneProduct);
productRouter.post("/create-product", auth, uploadImage.single('image'), createProduct);
productRouter.put("/update/:id_product", auth, uploadImage.single('image'), editProduct);
productRouter.delete("/remove-product/:id_product", auth, uploadImage.single('image'), deleteProduct);

export { productRouter };

import Router from "express";
import multer from "multer";
import uploadImage from "../middlewares/multer";

import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getOneProduct,
} from "../controllers/productController";

const productRouter = Router();
// const upload = multer({dest:'upload/'})

productRouter.get("/all", getAllProducts);
productRouter.get("/get-one/:id", getOneProduct);
productRouter.post("/create-product", uploadImage.single('image'), createProduct);
productRouter.put("/update/:id_product", editProduct);
productRouter.delete("/remove-product/:id_product", deleteProduct);

export { productRouter };

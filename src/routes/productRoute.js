import Router from "express";
import {
  createProduct,
  deleteProduct,
  editProduct,
  getAllProducts,
  getOneProduct,
} from "../controllers/productController";

const productRouter = Router();

productRouter.get("/all", getAllProducts);
productRouter.get("/get-one/:id", getOneProduct);
productRouter.post("/create-product", createProduct);
// productRouter.post("/:id_play/addtoplaylist/:id_song", insertSongPlaylist);
productRouter.put("/update/:id_product", editProduct);
productRouter.delete("/remove-product/:id_product", deleteProduct);

export { productRouter };

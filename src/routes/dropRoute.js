import Router from "express";
import uploadImage from "../middlewares/multer";
import { auth } from "../middlewares/auth";

import { createDrop, deleteDrop, editDrop, getAllDrops, getOneDrop } from "../controllers/dropController";

const dropRouter = Router();

dropRouter.get("/drops", getAllDrops);
dropRouter.get("/get-one/:id", getOneDrop);
dropRouter.post("/create-drop", auth, uploadImage.single("image"),createDrop);
dropRouter.put("/update/:id_drop", auth, uploadImage.single("image"),editDrop);
dropRouter.delete("/remove-drop/:id_drop",auth, uploadImage.single("image"),deleteDrop);

export default dropRouter;

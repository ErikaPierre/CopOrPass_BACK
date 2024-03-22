import Router from "express";
import uploadImage from "../middlewares/multer";
import { auth } from "../middlewares/auth";

import {
  getAllReleases,
  getOneRelease,
  createRelease,
  editRelease,
  deleteRelease,
} from "../controllers/releaseController";

const releaseRouter = Router();

releaseRouter.get("/releases", getAllReleases);
releaseRouter.get("/get-one/:id", getOneRelease);
releaseRouter.post("/create-release", auth, uploadImage.single("image"), createRelease);
releaseRouter.put("/update/:id_release", auth, uploadImage.single("image"),editRelease);
releaseRouter.delete("/remove-release/:id_release", auth, uploadImage.single("image"),deleteRelease);

export default releaseRouter;

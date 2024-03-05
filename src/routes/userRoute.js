import Route from "express";
import { connexion, inscription } from "../controllers/userController";

const userRouter = Route();

userRouter.get("/inscription", (req, res) => res.sender("inscription"));
userRouter.get("/connexion", (req, res) => res.sender("connexion"));

userRouter.post("/inscription", inscription);
userRouter.post("/connexion", connexion);

export default userRouter;

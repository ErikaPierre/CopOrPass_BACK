import Router from "express";
import {
  createComment,
  deleteComment,
  editComment,
  getAllComments,
  getOneComment,
  insertCommentInProduct,
} from "../controllers/commentController";

const CommentRouter = Router();

CommentRouter.get("/all", getAllComments);
CommentRouter.get("/get-one/:id", getOneComment);
CommentRouter.post("/create", createComment);
CommentRouter.post(
  "/:id_comm/add-to-product/:id_prod",
  insertCommentInProduct
);
CommentRouter.put("/update/:id_comm", editComment);
CommentRouter.delete("/remove/:id_comm", deleteComment);

export { CommentRouter };

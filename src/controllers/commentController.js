import { Comment } from "../models/commentModel";
import { Product } from "../models/releaseModel";

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json({
      comments,
      message: "Here's a list of all comments.",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Comments not found",
    });
  }
};

const getOneComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json({
      comment,
      message: "This the comment",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... comment not found",
    });
  }
};

const createComment = async (req, res) => {
  const { userName, title, content } = req.body;
  try {
    const newComment = await Comment.create({
      userName: userName,
      title: title,
      content: content,
    });
    res.json({
      newComment,
      message: "Your comment has been succefully create ",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Your comment hasn't been create. There is a problem",
    });
  }
};

const insertCommentInProduct = async (req, res) => {
  try {
    const productID = await Product.findById(req.params.id_prod);
    const newCommentAdd = await Comment.findById(req.params.id_comm);
    res.json({
      newCommentAdd,
      message: "Your comment has been succefully add to your product ",
    });
    productID.comments.push(newCommentAdd);
    productID.save();
  } catch (error) {
    res.json({ error: error.message });
  }
};

const editComment = async (req, res) => {
  try {
    const updateComment = await Comment.findByIdAndUpdate(
      { _id: req.params.id_comm },
      req.body,
      { new: true }
    );
    res.json({
      updateComment,
      message: "Your comment has been succefully updated",
    });
  } catch (error) {
    res.json({
      error,
      message: "Ooooops ... A problem was detected when updating your comment.",
    });
  }
};

const deleteComment = async (req, res) => {
  try {
    const removeComment = await Comment.findOneAndDelete({
      _id: req.params.id_comm,
    });
    res.json({
      removeComment,
      message: "The comment has been deleted",
    });
  } catch (error) {
    res.json({
      error,
      message:
        "Ooooops ... A problem was detected when you deleted the comment.",
    });
  }
};

export {
  createComment,
  getOneComment,
  getAllComments,
  insertCommentInProduct,
  editComment,
  deleteComment,
};

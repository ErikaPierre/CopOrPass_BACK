import { Product } from "../models/productModel";

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      products,
      message: "Here's a list of all your products.",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Products not found",
    });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({
      product,
      message: "This is your product",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Product not found",
    });
  }
};

const createProduct = async (req, res) => {
  const { image, dateRelease, name, modeleName, color, price } = req.body;
  try {
    const newProduct = await Product.create({
      image: image,
      dateRelease: dateRelease,
      name: name,
      modeleName: modeleName,
      color: color,
      price: price,
    });
    res.json({
      newProduct,
      message: "Your product has been succefully create ",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Your product hasn't been create. There is a problem",
    });
  }
};

// const insertProductInList = async (req, res) => {
//   try {
//     const playlistID = await Playlist.findById(req.params.id_play);
//     const newSongAdd = await Song.findById(req.params.id_song);
//     res.json({
//       newSongAdd,
//       message: "Your music has been succefully add to your playlist ",
//     });
//     playlistID.songs.push(newSongAdd);
//     playlistID.save();
//   } catch (error) {
//     res.json({ error: error.message });
//   }
// };

const editProduct = async (req, res) => {
  try {
    const updateProduct = await Product.findByIdAndUpdate(
      { _id: req.params.id_product },
      req.body,
      { new: true }
    );
    res.json({
      updateProduct,
      message: "Your product has been succefully updated",
    });
  } catch (error) {
    res.json({
      error,
      message: "Ooooops ... A problem was detected when updating your product.",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const removeProduct = await Product.findOneAndDelete({
      _id: req.params.id_product,
    });
    res.json({
      removeProduct,
      message: "Your product has been succefully deleted",
    });
  } catch (error) {
    res.json({
      error,
      message:
        "Ooooops ... A problem was detected when you deleted your product.",
    });
  }
};

export {
  getAllProducts,
  getOneProduct,
  createProduct,
  editProduct,
  deleteProduct,
};
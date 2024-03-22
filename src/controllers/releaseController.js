import Release from "../models/releaseModel";

const getAllReleases = async (req, res) => {
  try {
    const releases = await Release.find();
    res.json({
      releases,
      message: "Here's a list of all your releases.",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Products not found",
    });
  }
};

const getOneRelease = async (req, res) => {
  try {
    const product = await Release.findById(req.params.id);
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

const createRelease = async (req, res) => {
  try {
    const releaseData = req.body;
    const image = req.file.path;

    const newRelease = new Release({
      image: image,
      dateRelease: releaseData.dateRelease,
      modeleName: releaseData.modeleName,
      color: releaseData.color,
      price: releaseData.price,
      brand: releaseData.brand,
      comments: [],
    });
    console.log(newRelease);
    await newRelease.save();
    res.json({
      newRelease,
      message: "Your release has been succefully create ",
    });
  } catch (error) {
    res.json({
      error,
      message: error.message,
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

const editRelease = async (req, res) => {
  try {
    const updateRelease = await Release.findByIdAndUpdate(
      { _id: req.params.id_release },
      req.body,
      { new: true }
    );
    res.json({
      updateRelease,
      message: "Your release has been succefully updated",
    });
  } catch (error) {
    res.json({
      error,
      message: "Ooooops ... A problem was detected when updating your release.",
    });
  }
};

const deleteRelease = async (req, res) => {
  try {
    const removeRelease = await Release.findOneAndDelete({
      _id: req.params.id_release,
    });
    res.json({
      removeRelease,
      message: "Your release has been succefully deleted",
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
  getAllReleases,
  getOneRelease,
  createRelease,
  editRelease,
  deleteRelease,
};

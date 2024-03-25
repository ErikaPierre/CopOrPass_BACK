import Drop from "../models/dropModel";

const getAllDrops = async (req, res) => {
  try {
    const drops = await Drop.find();
    res.json({
      drops,
      message: "Here's a list of all your drops.",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Drops not found",
    });
  }
};

const getOneDrop = async (req, res) => {
  try {
    const drop = await Drop.findById(req.params.id);
    res.json({
      drop,
      message: "This is your drop",
    });
  } catch (error) {
    res.json({
      error,
      message: "Oooops ... Drop not found",
    });
  }
};

const createDrop = async (req, res) => {
  try {
    const dropData = req.body;
    const image = req.file.path;

    const newDrop = new Drop({
      image: image,
      date: dropData.date,
      modeleName: dropData.modeleName,
      color: dropData.color,
      price: dropData.price,
      brand: dropData.brand,
      comments: [],
    });
    console.log(newDrop);
    await newDrop.save();
    res.json({
      newDrop,
      message: "Your drop has been succefully create ",
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

const editDrop = async (req, res) => {
  try {
    const updateDrop = await Drop.findByIdAndUpdate(
      { _id: req.params.id_drop },
      req.body,
      { new: true }
    );
    res.json({
      updateDrop,
      message: "Your drop has been succefully updated",
    });
  } catch (error) {
    res.json({
      error,
      message: "Ooooops ... A problem was detected when updating your drop.",
    });
  }
};

const deleteDrop = async (req, res) => {
  try {
    const removeDrop = await Drop.findOneAndDelete({
      _id: req.params.id_drop,
    });
    res.json({
      removeDrop,
      message: "Your release has been succefully deleted",
    });
  } catch (error) {
    res.json({
      error,
      message: "Ooooops ... A problem was detected when you deleted your drop.",
    });
  }
};

export { getAllDrops, getOneDrop, createDrop, editDrop, deleteDrop };

import { generateAuthToken } from "../middlewares/auth";
import User from "../models/userModel";

const inscription = async (req, res) => {
  try {
    const newUser = await new User();
    newUser.email = req.body.email;
    newUser.password = await newUser.crypto(req.body.password);
    newUser.save();

    const token = generateAuthToken(newUser);

    res.send({ newUser, token });
  } catch (error) {
    res.send(error.message);
  }
};

const connexion = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email }).select("+password");
    const verify = await user.verifPass(password, user.password);

    if (!verify) {
      const error = new Error("Invalid password");
      throw error;
    }

    const token = generateAuthToken(user);

    res.json({ user, token, message: "You are connected" });
  } catch (error) {
    res.send(error.message);
  }
};

export { inscription, connexion };

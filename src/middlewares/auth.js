import jwt from "jsonwebtoken";
import "dotenv/config";

const auth = async (req, res, next) => {
  const tokerHeader = req.headers.authorization;
  const token = tokerHeader.split("")[1];

  if (!token) {
    return res
      .status(401)
      .json({ message: "Unauthorized access. Missing token." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Your token is invalid." });
  }
};

const generateAuthToken = (user) => {
  const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};

export { auth, generateAuthToken };

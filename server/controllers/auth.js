const userModel = require("../models/user");
const jwt = require("jsonwebtoken");

const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "email and password required" });
    }

    const isUserExists = await userModel.findOne({ email: email });
    if (!isUserExists) {
      return res.status(400).json({ message: "User not found" });
    }

    if (isUserExists.password != password) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const userPrivateKey = process.env.USERPRIVATEKEY;
    const accessToken = jwt.sign(
      { userId: isUserExists._id, isHero: isUserExists.isHero },
      userPrivateKey
    );

    return res.status(200).json({ message: "success", token: accessToken });
  } catch (error) {
    return res.status(500).json({ message: "server error", error });
  }
};

const registerHandler = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "emailand password required" });
    }

    const savedUSer = await new userModel({
      email,
      password,
    }).save();

    return res.status(200).json({ message: "Success" });
  } catch (error) {
    return res.status(500).json({ message: "server error", error });
  }
};

module.exports = {
  loginHandler,
  registerHandler,
};

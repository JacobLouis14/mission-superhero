const jwt = require("jsonwebtoken");

const isHero = (req, res, next) => {
  try {
    const { token } = req.params;
    const secretKey = process.env.USERPRIVATEKEY;
    const decoded = jwt.verify(token, secretKey);

    if (!decoded) {
      throw new Error("Token not valid");
    }
    if (decoded.isHero === false) {
      throw new Error("Only accessable for hero");
    }
    next();
  } catch (error) {
    return res.status(401).json({ message: "Authorization failed", error });
  }
};

module.exports = isHero;

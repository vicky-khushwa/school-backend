const jwt = require("jsonwebtoken");
const Key = process.env.KEY;

function verifyToken(req, res, next) {
  const token = req.header("Authorization");
  if (token === undefined) return res.status(404);
  try {
    const decoded = jwt.verify(token, Key);
    req.email = decoded.email;
    res.status(200);
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res
        .status(403)
        .json({ error: "Token expired. Please log in again." });
    }
    res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = verifyToken;

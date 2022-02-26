const jwt = require("jsonwebtoken");
const { config } = require("dotenv");

config();

module.exports = {
  displayStatus: (res, code, message, data) => {
    res.status(code).json({
      responseCode: code,
      responseMessage: message,
      responseData: data,
    });
  },
  stringify: (data) => {
    return JSON.stringify(data);
  },
  parse: (data) => {
    return JSON.parse(data);
  },
  createJWT: ({ email, password }) => {
    console.log(process.env.JWT_SECRET);
    return jwt.sign({ email, password }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });
  },
  verifyToken: (token) => {
    return jwt.verify(token, process.env.JWT_SECRET, { expiresIn: "24h" });
  },
};

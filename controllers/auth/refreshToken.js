const { User } = require("../../models/users");
const RequestError = require("../../helpers/RequestError");
require("dotenv").config();
const { SECRET_KEY } = process.env;
const localStorage = require("localstorage");
const jwt = require("jsonwebtoken");

const refreshToken = async (req, res, next) => {
  const token = localStorage.getItem("token");
  try {
    jwt.verify(token, SECRET_KEY);
    const { id } = jwt.decode(token);
    const user = await User.findById(id);

    if (!user) {
      next(
        RequestError(
          401,
          "Token was expired. Please make a new signin request."
        )
      );
    }
    req.user = user;

    next();
  } catch (error) {
    next(
      RequestError(401, "Token was expired. Please make a new signin request.")
    );
  }
};

module.exports = refreshToken;

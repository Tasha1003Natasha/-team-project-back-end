const { User } = require("../models/users");
const jwt = require("jsonwebtoken");
const { RequestError } = require("../helpers/index");
require("dotenv").config();

console.log(User);
const { SECRET_KEY } = process.env;


const authenticate = async (req, res, next) => {
  try {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
      next(RequestError(401, "Not authorized"));
    }

    try {
      jwt.verify(token, SECRET_KEY);
      const { id } = jwt.decode(token);

      const resultUser = await User.find({ _id: id });

      if (!resultUser) {
        next(RequestError(401, "Not authorized"));
      }

      req.user = resultUser;

      next();
    } catch (error) {
      next(RequestError(401, "Not authorized"));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = authenticate;

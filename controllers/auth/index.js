const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const registerUser = require("./register");
const current = require("./current");
const refreshToken = require("./refreshToken");

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  current,
  refreshToken,
};

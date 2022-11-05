const loginUser = require("./loginUser");
const logoutUser = require("./logoutUser");
const registerUser = require("./register");
const current = require("./current");
const googleCallbackHandler = require("./googleCallbackHandler");

module.exports = {
  googleCallbackHandler,
  registerUser,
  loginUser,
  logoutUser,
  current,

};

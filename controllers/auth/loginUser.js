const { User } = require("../../models/user");
const RequestError = require("../../helpers/RequestError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const { SECRET_KEY } = process.env;

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const result = await User.findOne({ email });

  if (!result) {
    throw RequestError(401, "Email is wrong");
  }

  const checkPass = await bcrypt.compare(password, result.password);

  if (!checkPass) {
    throw RequestError(401, "Password is wrong");
  }

  const token = jwt.sign({ id: result._id }, SECRET_KEY, { expiresIn: "1h" });

  const updatedUser = await User.findOneAndUpdate(
    result._id,
    { token },
    { new: true }
  );

  res.json({
    token: updatedUser.token,
    user: {
      email: updatedUser.email,
      id: updatedUser._id,
    },
  });
};

module.exports = loginUser;

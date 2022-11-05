const { User } = require("../../models/user");

const logoutUser = async (req, res) => {
  const { _id } = req.user;

  await User.findOneAndUpdate(_id, { token: "" });
  res.json({
    messege: "Logout success",
  });
};

module.exports = logoutUser;

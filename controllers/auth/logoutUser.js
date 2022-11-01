const { User } = require("../../models/users");

const logoutUser = async (req, res) => {
  const { _id } = req.user;

  await User.findOneAndUpdate({ _id: _id }, { token: "" }, { new: true });
  // res.status(204).end();
  res.json({
    messege: "Logout success",
  });
};

module.exports = logoutUser;

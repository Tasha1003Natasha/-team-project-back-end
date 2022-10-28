const { User } = require("../../models/users");

const logoutUser = async (req, res) => {
  const { _id } = req.user;

  await User.findOneAndUpdate({ _id: _id }, { token: "" }, { new: true });

  res.status(204).end()
};


module.exports = logoutUser;

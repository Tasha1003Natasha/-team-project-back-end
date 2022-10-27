const { User } = require("../../models/users");

const logoutUser = async (req, res) => {

  const { _id } = req.user;
  console.log(req.user);
  await User.findOneAndUpdate({ _id: _id }, { token: "" }, { new: true });

  res.status(204)
};


module.exports = logoutUser;

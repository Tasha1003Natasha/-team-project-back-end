const current = async (req, res) => {
  const { email, _id } = req.user;
  res.json({ user: { email, _id } });
};

module.exports = current;

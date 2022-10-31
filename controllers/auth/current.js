const current = async(req, res) => {
  const { email } = req.users;

  res.json({ email });
};

module.exports = current;

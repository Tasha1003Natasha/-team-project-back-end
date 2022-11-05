const { User } = require("../../models/user");
const RequestError = require("../../helpers/RequestError");
const bcrypt = require("bcrypt");


const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    throw RequestError(409, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  
  const result = await User.create({
    email,
    password: hashedPassword,
  });
  

  res.status(201).json({
    email: result.email,
    // id: result._id,
  });
};

module.exports = registerUser;

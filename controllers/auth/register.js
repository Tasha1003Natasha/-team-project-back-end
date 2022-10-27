const { User } = require("../../models/users");
const RequestError = require("../../helpers/RequestError");
// const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");
// const gravatar = require("gravatar");
// const sendEmail = require("../../helpers/sendEmail");
// const createVerifyEmail = require("../../helpers/createVEriFyEmail");


const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const userEmail = await User.findOne({ email });

  if (userEmail) {
    throw RequestError(409, "Email in use");
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  // const avatarURL = gravatar.url(email);

  // const verificationToken = nanoid();

  const result = await User.create({
    email,
    password: hashedPassword,
    // avatarURL,
    // verificationToken,
  });
  // console.log(verificationToken);

  // const mail = createVerifyEmail(email, verificationToken);
  // await sendEmail(mail);

  res.status(201).json({
    email: result.email,
    // id: result._id,
    // avatarURL: result.avatarURL,
  });
};

module.exports = registerUser;

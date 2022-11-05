const jwt = require("jsonwebtoken");
const { User } = require("../../models/user");



const {
    SECRET_KEY,
    FRONT_END_BASE_URL
} = process.env

const googleCallbackHandler = async (req, res) => {
    const result = await User.findOne({ email: req.user.email });

    let token = null;

    if (!result) {
        const createdUser = await User.create({
            email: req.user.email,
            password: 'hashedPassword',
        });

        token = jwt.sign({ id: createdUser._id }, SECRET_KEY, { expiresIn: "1h" });

        await User.findOneAndUpdate(
            createdUser._id,
            { token }
        );

    } else {
        token = jwt.sign({ id: result._id }, SECRET_KEY, { expiresIn: "1h" });
        await User.findOneAndUpdate(
            result._id,
            { token }
        );
    }

    res.redirect(`${FRONT_END_BASE_URL}?token=${token}`)
}


module.exports = googleCallbackHandler;
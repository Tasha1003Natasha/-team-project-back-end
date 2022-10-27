const mongoose = require("mongoose");
const { Schema } = mongoose;
const { handleSaveErrors } = require("../middlewares");

const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
      minlength: 6,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    token: {
      type: String,
      default: "",
    },
    results: {
      type: Number,
      default: 0,
    },
    testType: {
      type: String,
      default: "",
    },
    // avatarURL: {
    //   type: String,
    //   required: true,
    // },
    // verify: {
    //   type: Boolean,
    //   default: false,
    // },
    // verificationToken: {
    //   type: String,
    //   required: true,
    // },
  },
  { versionKey: false }
);

userSchema.post("save", handleSaveErrors);

const User = mongoose.model("user", userSchema);

module.exports = {
  User,
};

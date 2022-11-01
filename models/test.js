const { Schema, model } = require("mongoose");
const handleSaveErrors = require("../middlewares/handleSaveErrors");

const testSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    answers: {
      type: [String], // check
      required: true,
    },
    rightAnswer: {
      type: String,
      required: true,
      versionKey: false,
    },
    type: {
      type: String,
      enum: ["tech", "theory"], // added
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

testSchema.post("save", handleSaveErrors);

const Test = model("test", testSchema);

module.exports = {
  Test,
};

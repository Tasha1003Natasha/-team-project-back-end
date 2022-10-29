const { Schema, model } = require("mongoose");
const handleSaveErrors = require("../middlewares/handleSaveErrors");

const testSchema = new Schema(
  {
    question: {
      type: String,
      required: true,
    },
    questionId: {
      type: Number,
    },
    answers: {
      type: Array,
      required: true,
    },
    rightAnswer: {
      type: String,
      required: true,
    },
    type: {
      type: String,
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

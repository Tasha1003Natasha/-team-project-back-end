const { Schema, model } = require("mongoose");
const Joi = require("joi");
// const { handleSaveErrors } = require("../helpers");

const questionSchema = new Schema(
  {
    question: {
      type: String,
      // required: true,
    },
    questionId: {
      type: Number,
      // required: true,
    },
    answers: {
      type: Array,
      // required: true,
    },
    rightAnswer: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

// questionSchema.post("save", handleSaveErrors);

const getquestionSchema = Joi.object({
  question: Joi.string().required(),
  questionId: Joi.number().required(),
  answers: Joi.array().required(),
  // rightAnswer: Joi.string().required(),
});

const chackquestionSchema = Joi.object({
  rightAnswer: Joi.string().required(),
});

const schemas = {
  getquestionSchema,
  chackquestionSchema,
};

const Test = model("test", questionSchema);

module.exports = {
  Test,
  schemas,
};

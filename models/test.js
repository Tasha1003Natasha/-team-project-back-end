const { Schema, model } = require("mongoose");
const Joi = require("joi");
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

const getSchema = Joi.object({
  question: Joi.string().required(),
  questionId: Joi.number().required(),
  answers: Joi.array().required(),
  rightAnswer: Joi.string().required(),
  type: Joi.string().required(),
});

const schemas = {
  getSchema,
};

const Test = model("test", testSchema);

module.exports = {
  Test,
  schemas,
};

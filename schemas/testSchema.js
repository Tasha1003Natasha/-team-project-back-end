const Joi = require("joi");

const getSchema = Joi.object({
  question: Joi.string().required(),
  questionId: Joi.number().required(),
  answers: Joi.array().required(),
  rightAnswer: Joi.string().required(),
  type: Joi.string().required(),
});

module.exports = getSchema;

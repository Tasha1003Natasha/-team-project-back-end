const Joi = require("joi");

const getSchema = Joi.object({
  question: Joi.string().required(),

  answers: Joi.array().required(),
  //   rightAnswer: Joi.string().required(),
  type: Joi.string().required(),
  _id: Joi.string().required(),
});

module.exports = getSchema;

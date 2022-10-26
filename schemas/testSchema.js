const Joi = require("joi");

const addSchema = Joi.object({
  //   question: Joi.string().required(),

  //   answers: Joi.array().required(),
  //   rightAnswer: Joi.string().required(),
  type: Joi.string().required(),
  //   results: Joi.number().required(),
});

module.exports = addSchema;

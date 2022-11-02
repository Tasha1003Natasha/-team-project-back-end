const Joi = require("joi");

const resultsSchema = Joi.array().items(
  Joi.object({
    userAnswer: Joi.string(),
    _id: Joi.string().required(),
  })
);

module.exports = resultsSchema;
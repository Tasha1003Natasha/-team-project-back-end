const Joi = require("joi");

const resultsSchema = Joi.object({
    userAnswer: Joi.array().required(),
});

module.exports = resultsSchema;

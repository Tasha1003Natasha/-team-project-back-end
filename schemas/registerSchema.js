const Joi = require("joi");

const registerSchema = Joi.object({
  password: Joi.string().min(6).required(),
  subscription: Joi.string(),
  email: Joi.string().required(),
});

module.exports = registerSchema;

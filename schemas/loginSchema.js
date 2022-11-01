const Joi = require("joi");

const loginSchema = Joi.object({
  password: Joi.string().min(6).required(),
  email: Joi.string().required(),
});

module.exports = loginSchema;


// todo add RegEX to validate Email
//  unite files loginSchema.js and registerSchema.js
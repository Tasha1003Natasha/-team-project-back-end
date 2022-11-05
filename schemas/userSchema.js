const Joi = require("joi");

const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const loginSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string()
        .required()
        // .pattern(emailRegEx),
});

const registerSchema = Joi.object({
    password: Joi.string().min(6).required(),
    email: Joi.string()
        .required()
        .pattern(emailRegEx),
});

module.exports = { loginSchema, registerSchema };

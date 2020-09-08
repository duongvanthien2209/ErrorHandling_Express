const { Joi } = require('celebrate');

const loginSchema = Joi.object({
    email: Joi.string()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .required()
}).options({ abortEarly: false });

// const registerSchema = Joi.object({});

module.exports = {
    loginSchema
};
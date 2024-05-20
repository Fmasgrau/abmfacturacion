import Joi from "joi";

const create = Joi.object({
  email: Joi.string().email().max(100).required(),
  password: Joi.string()
    .pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$'))
    .required()
    .messages({
      'string.pattern.base': `Password must have at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character.`,
    }),
});

export default {
  create,
};

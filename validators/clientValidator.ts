import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().max(100).required(),
    email: Joi.string().email().max(100).required(),
});

const update = Joi.object({
  name: Joi.string().max(100),
  email: Joi.string().email().max(100),
});

export default {
  create,
  update
};

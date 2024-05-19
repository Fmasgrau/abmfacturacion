import Joi from 'joi';

const create = Joi.object({
    name: Joi.string().max(100).required(),
    price: Joi.number().required(),
});

const update = Joi.object({
  name: Joi.string().max(100),
  price: Joi.number().required(),
});

export default {
  create,
  update,
};

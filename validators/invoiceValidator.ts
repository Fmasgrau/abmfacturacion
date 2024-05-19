import Joi from "joi";

const create = Joi.object({
  client_id: Joi.number().required(),
  invoiceItems: Joi.array().required(),
  total: Joi.number().required(),
  isFail: Joi.boolean().required(),
});

export default {
  create,
};

import Joi from "joi";

const getAll = Joi.object({
  page: Joi.number().min(0).required(),
  limit: Joi.number().min(1).required(),
})

export default {
  getAll
};

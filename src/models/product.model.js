import Joi from "joi";
const productSchema = Joi.object({
  name: Joi.string().required().max(40),
  discount: Joi.number().max(10000),
  price: Joi.number().required(),
  image: Joi.string().uri().required(),
  quantity: Joi.number().required(),
});

export default productSchema;

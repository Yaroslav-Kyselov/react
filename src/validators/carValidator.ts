import * as Joi from "joi";

export const carValidator=Joi.object({
    brand:Joi.string(),
    price:Joi.number(),
    year:Joi.number()

})
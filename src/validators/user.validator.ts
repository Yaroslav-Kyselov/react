import * as Joi from "joi";

export const userValidators = Joi.object({
    username: Joi.string().pattern(/w/).required().messages({
        'string.pattern.base': 'name must at leasat four char'
    }),
    password: Joi.string().min(3).max(6).required().messages({
        "string.min": "password can be at least 3 chars",
        "string.max": "password cannot be gt least 9 chars"
    }),


    age: Joi.number().min(12).max(117).required().messages({
        "number.min": "min age 1",
        "number.max": "max age 117"
    }),

})

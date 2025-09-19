import * as Joi from "joi";

export const carValidator=Joi.object({
    brand:Joi.string().pattern(new RegExp('^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$'))
        .messages({'string.pattern.base':'You brand value did not match pattern'}),
    price:Joi.number().min( 0 ).max(1000000)
        .messages({'number.min':'Price must be greater than or equal to 0',
            'number.max':'Max price 1 000 000'
        }),
    year:Joi.number().min(1990).max(2025).messages({
        'number.min':'Year must be greater than or equal to 1990',
        'number.max':'Year must be less than or equal to 2025'
    })

})
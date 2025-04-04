import Joi from "joi";

export const regionIdValidator = Joi.object({
    regionId: Joi.string().hex().length(24).required()
})

export const removeWebsiteById = Joi.object({
    id: Joi.string().hex().length(24).required()
})

export const newWebsiteValidation = Joi.object({
    name: Joi.string().min(3).required(),
    regionId: Joi.string().min(3).required(),
    description: Joi.string().min(3).required(),
    adultPrice: Joi.number().min(0).required(),
    childPrice: Joi.number().min(0).required(),
})
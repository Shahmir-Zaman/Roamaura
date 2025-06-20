const Joi = require('joi');

module.exports.lsitingSchema= Joi.object({
    listing : Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required(),
        countr: Joi.string().required().min(0),
        image: Joi.string().allow("",null)
    }).required()
})
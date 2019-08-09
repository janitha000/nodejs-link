const joi = require('joi');

module.exports.loginschema = {
    email: joi.string().min(3).max(50).required(),
    password: joi.string().min(3).max(100).required()
}

module.exports. levelschema = {
    level: joi.number().min(0).max(2).required()
}


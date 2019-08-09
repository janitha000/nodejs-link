const joi = require('joi')

module.exports = (schema, property) => {
    return (req, res, next) => {
        const {error} = joi.validate(req[property], schema);

        if(error){
            return res.status(400).send(error.details[0].message);
        }
        else{
            next();
        }
    }
}
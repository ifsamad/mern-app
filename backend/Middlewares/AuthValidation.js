// const joi = require('joi');

// const signupValidation = (req, res, next) =>{
//     const schema = joi.object({
//         name : joi.string().min(3).max(50).required(),
//         name : joi.string().email().required(),
//         name : joi.string().min(4).max(50).required(),
//     });
//     const {error} = schema.validate(req.body);
//     if(error) {
//         return res.status(400)
//         .json({message : "Bad request", error})
//     }
//     next();
// }

// const loginValidation = (req, res, next) =>{
//     const schema = joi.object({
//         name : joi.string().email().required(),
//         name : joi.string().min(4).max(50).required(),
//     });
//     const {error} = schema.validate(req.body);
//     if(error) {
//         return res.status(400)
//         .json({message : "Bad request", error})
//     }
//     next();
// }

// module.exports = {
//     signupValidation,
//     loginValidation
// }

const Joi = require('joi');

const signupValidation = (req, res, next) => {
    const schema = Joi.object({
        name: Joi.string().min(3).max(50).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(50).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details[0].message // Provide detailed error message
        });
    }
    next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(4).max(50).required(),
    });

    const { error } = schema.validate(req.body);
    if (error) {
        return res.status(400).json({
            message: "Bad request",
            error: error.details[0].message // Provide detailed error message
        });
    }
    next();
};

module.exports = {
    signupValidation,
    loginValidation
};

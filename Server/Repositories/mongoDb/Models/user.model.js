const mongoose = require('mongoose')
const jwt = require('jsonwebtoken');
const joi = require('joi');
const config = require('config')
const bycrypt = require('bcrypt')

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 100 },
    email: { type: String, required: true, minlength: 5, maxlength: 100, unique: true },
    password: { type: String, required: true, minlength: 3, maxlength: 100 },
    isAdmin: Boolean
})

UserSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({ _id: this._id, isAdmin: this.isAdmin }, config.get('privateKey'), { expiresIn: '1h' })
    return token;
};

UserSchema.pre('save', async (next) => {
    const user = this;
    if (user.isModified('password')) {
        user.password = await bycrypt.hash(user.password, 10);
    }
    next();
})


const validateUser = (user) => {
    const Schema = {
        name: joi.string().min(3).max(50).required(),
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(3).max(255).required()
    };

    return joi.validate(user, Schema)
}

exports.User = mongoose.model('User', UserSchema);
exports.validate = validateUser;
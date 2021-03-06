const bycrypt = require('bcrypt');
const { User, validate } = require('../Repositories/mongoDb/Models/user.model');
const AuthService = require('../Services/AuthService');
const joi = require('joi')

exports.register_user = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error) {
            return res.status(400).send(error.details[0].message);
        }

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send('User already registered')
        }

        user = new User(req.body);


        let token = user.generateAuthToken();
        await user.save();

        res.set('x-auth-token', token).send({
            _id: user._id,
            name: user.name,
            email: user.email,
            token: token
        })
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}

exports.login = async (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (err) {
            return res.status(500).send('Error when retrieving user')
        }
        if (!user) {
            return res.status(404).send('User not found')
        }

        const isPasswordValid = bycrypt.compareSync(req.body.password, user.password);
        if (!isPasswordValid) {
            return res.status(401).send('Password is not correct');
        }

        //const token = user.generateAuthToken();
        const token = AuthService.generateToken({ "_id": user._id });
        //res.cookie('SESSIONID', token);
        res.set('x-auth-token', token).json(token);

    })


}

exports.get_user_name = async(req, res) => {
    let emailU = req.query.email;
    try{
        let userName = await User.findOne({email : emailU}, 'name').lean().exec();
        res.send(userName);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}




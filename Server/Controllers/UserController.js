const userService = require('../Services/UserService')

exports.get_users =async (req, res) => {
    try{
        let users = await userService.get_users();
        res.send(users);
    }
    catch(err) {
        res.status(500).send(err);
    }
}

exports.add_user = async (req, res) => {
    let user = req.body;
    try{
        let result = await userService.add_user(user);
        res.send(result)
    }
    catch(err){
        res.status(500).send(err);
    }
}

const userService = require('../Services/UserService')
const repo = require('../Repositories/neo4j/UserRepo')
const joi = require('joi')

exports.get_all_nodes = async (req, res) => {
    try {
        let users = await userService.get_all_nodes();
        res.send(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.add_user = async (req, res) => {
    let user = req.body;
    try {
        let result = await userService.add_user(user);
        res.send(result)
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.get_users = async (req, res) => {
    try {
        let users = await repo.get_users();
        res.send(users);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.get_companies = async (req, res) => {
    try {
        let companies = await repo.get_companies();
        res.send(companies);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.get_user_by_name = async (req, res) => {
    let name = req.params.name; 
    let level = req.query.level || 1;

   // const { error } = validateLevel({"level" : level});
   // if (error) {
  //      return res.status(400).send(error.details[0].message);
  //  }
  //  else {
        try {
            let friends = await repo.get_firends_by_level(name, level)
            res.send(friends);
        } catch (err) {
            res.status(500).send(err);
        }
  //  }
}

exports.get_company_by_name = async (req, res) => {
    let name = req.params.name;
    try {
        let employees = await repo.get_compnay_by_name(name);
        res.send(employees)
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.get_possible_friends = async (req, res) => {
    let name = req.params.name;
    try {
        let possibleFriends = await repo.get_same_office_no_friends(name);
        res.send(possibleFriends)
    } catch (err) {
        res.status(500).send(err);
    }
}

// const validateLevel = (level) => {
//     const schema = {
//         level: joi.number().min(0).max(2).required()
//     }
//     return joi.validate(level, schema);
// }
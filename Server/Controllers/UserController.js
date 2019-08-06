const userService = require('../Services/UserService')
const repo = require('../Repositories/neo4j/UserRepo')

exports.get_all_nodes =async (req, res) => {
    try{
        let users = await userService.get_all_nodes();
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

exports.get_users = async (req, res) => {
    try{
        let users = await repo.get_users();
        res.send(users);
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.get_companies =async  (req, res) => {
    try{
        let companies = await repo.get_companies();
        res.send(companies);
    }
    catch(err){
        res.status(500).send(err);
    }
}

exports.get_user_by_name = async (req, res) => {
    let name = req.params.name;
    console.log(name);
    try{
        let friends = await repo.get_user_by_name(name);
        res.send(friends);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.get_company_by_name = async (req, res) => {
    let name = req.params.name;
    try{
        let employees = await repo.get_compnay_by_name(name);
        res.send(employees)
    } catch(err){
        res.status(500).send(err);
    }
}

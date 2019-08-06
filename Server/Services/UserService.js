const repo = require('../Repositories/neo4j/UserRepo');

exports.add_user = async (user) => {
    try{
        let result = await repo.add_user(user);
        return result;
    }
    catch(err) {
        return err;
    }
}

exports.get_all_nodes = async () => {
    try{
        let users = await repo.get_all_nodes();
        return users;
    }
    catch(err) {
        return err;
    }
}
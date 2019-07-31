const repo = require('../Repositories/mongoDb/LocationsRepo');

exports.add_location = async (req, res) => {
    try {
        let result = await repo.add_location(req.body);
        res.send(result)
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.get_locations = async (req, res) => {

    let params = {};
    let queryParams = req.query;
    Object.keys(queryParams).forEach((name, value) =>
     params[name] = queryParams[name])

    try {
        let locations = await repo.get_locations(params);
        res.send(locations);
    } catch (err) {
        res.status(500).send(err);
    }
}

exports.get_by_id = async (req, res) => {
    try {
        let location = await repo.get_locatoin_by_id(req.params.id);
        res.send(location);
    }
    catch (err) {
        res.status(500).send(err)
    }
}


exports.get_meta_data = async (req, res) => {
    try{
        let result = await repo.get_meta_data();
        res.send(result);
    } catch(err){
        res.sendStatus(500).send(err);
    }
}
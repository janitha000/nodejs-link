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
    let filterBy = req.query.filter || '';
    let sortBy = req.query.sort || '';

    try {
        let locations = await repo.get_locations(filterBy, sortBy);
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
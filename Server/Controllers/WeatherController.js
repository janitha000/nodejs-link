const repo = require('../Repositories/mongoDb/weatherRepo');

exports.get_all = async (req, res) => {
    let page = parseInt(req.query.page) || 1;
    try {
        let result = await repo.get_all(page);
        res.send(result);
    }
    catch (err) {
        res.setStatus(500).send(err);
    }
}

exports.get_by_id = async (req, res) => {
    let id = req.params.id;
    try {
        let data = await repo.get_by_id(id);
        res.send(data);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.get_elevation = async (req, res) => {
    try {
        let filter = {}

        if (req.query.gt) {
            filter = { '$gt': parseInt(req.query.gt) }
        }
        if (req.query.lt) {
            filter = { '$lt': parseInt(req.query.lt) }
        }

        let result = await repo.get_elevation(filter);
        res.send(result);
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.test_weather = async (req, res) => {
    try {
        let result = await repo.test_weather();
        res.send(result)
    }
    catch (err) {
        res.status(500).send(err)
    }
}

exports.get_time_by_id = async (req, res) => {
    let id = req.params.id;
    try {
        let time = await repo.get_time_by_id(id);
        res.send(time);
    }
    catch (err) {
        res.setStatus(500).sed(err);
    }
}

exports.get_meta_data = async (req, res) => {
    let item = req.query.item;
    try {
        let maxAir = await repo.get_max(item);
        res.send(maxAir)
    }
    catch (err) {
        res.setStatus(500).send(err.message);
    }
}

exports.get_count = async (req, res) => {
    try {
        let count = await repo.get_count();
        res.send(count)
    }
    catch (err) {
        res.status(500).send(err);
    }
}

exports.test_stream = async (req, res) => {
    try {
        await repo.get_not_vaid_wind_speed();
        res.send('Ok');
    }
    catch (err) {
        res.status(500).send(err);
    }
}
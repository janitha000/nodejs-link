const repo = require('../Repositories/mongoDb/airBnBRepo');

exports.get_location = async (req, res) => {
    try{
        let params = {}
        let queryParams = req.query;

        Object.keys(queryParams).forEach((name, value) => {
            params[name] = queryParams[name];
        })

        let location = await repo.get_by_name(params);
        res.send(location)
    }
    catch(err){
        res.status(500).send(err.message);
    }
}

exports.get_by_review_score = async (req, res) => {
    try{
        let score = req.query.score;

        let locations = await repo.get_by_review_score(score);
        res.send(locations);
    }
    catch(err){
        res.status(500).send(err.message);
    }
}
const jwt = require('jsonwebtoken');
const config = require('config')

module.exports = (req, res, next) => {
    const token = req.headers["x-access-token"] || req.headers["authorization"];
    if(!token){
        return res.status(401).send('Access denied, token not provided');
    }

    jwt.verify(token, config.get("privateKey"), (err, decoded) => {
        if(err){
            res.status(400).send('Access Denied. Invalid token');
        }
        req.user = decoded;
        next();

    })
}
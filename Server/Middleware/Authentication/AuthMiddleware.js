const jwt = require('jsonwebtoken');
const config = require('config')

module.exports = (req, res, next) => {
    let token = req.get('Authorization');
    if(!token){
        return res.status(401).send('Access denied, token not provided');
    }

    token = token.slice(7);

    jwt.verify(token, config.get("privateKey"), (err, decoded) => {
        if(err){
            res.status(400).send('Access Denied. Invalid token');
        }
        req.user = decoded;
        next();

    })
}
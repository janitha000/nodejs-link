const jwt = require('jsonwebtoken');
const config = require('config')
const authService = require('../../Services/AuthService')

module.exports = (req, res, next) => {
    let token = req.get('Authorization');
    if(!token){
        return res.status(401).send('Access denied, token not provided');
    }

    token = token.slice(7);
    authService.verifyToken(token).then(result => {
        req.user = result;
        next();
    }).catch(err => {
        res.status(401).send('Access Denied. Invalid token');
    })

    // jwt.verify(token, config.get("privateKey"), (err, decoded) => {
    //     if(err){
    //         res.status(400).send('Access Denied. Invalid token');
    //     }
    //     req.user = decoded;
    //     next();

    // })
}
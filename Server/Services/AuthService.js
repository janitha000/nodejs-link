const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKey = fs.readFileSync('D:\\Singapore\\private.key', 'utf8')
const publicKey = fs.readFileSync('D:\\Singapore\\public.key', 'utf8')

exports.generateToken = (payload) => {
    
    const token = jwt.sign(payload, privateKey, { expiresIn : '1h', algorithm : 'RS256'})
    return token;
}

exports.verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, publicKey , (err, decoded) => {
            if(err){
                reject(err);
            }
            resolve(decoded);
        })
    })
}
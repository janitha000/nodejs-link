const crypto = require('crypto');
const path = require('path');
const fs = require('fs');

var algorithm = 'aes256';

exports.encrypt = (text) => {
    return new Promise((resolve, reject) => {
        try{
            let password = process.env.AES_PASS;
            const cipher = crypto.createCipher(algorithm, password);
            let cryptedValue = cipher.update(text, 'utf8', 'hex');
            cryptedValue += cipher.final('hex');
        
            resolve(cryptedValue);
        }
        catch(err){
            reject(err);
        }
    })
}

exports.decrypt = (text) => {
    return new Promise((resolve, reject) => {
        try{
            let password = process.env.AES_PASS;
            const decipher = crypto.createDecipher(algorithm, password);
            let decypheredValue = decipher.update(text, 'hex', 'utf8');
            decypheredValue += decipher.final('utf-8');

            resolve(decypheredValue);
        }
        catch(err){
            reject(err);
        }
    })
}

exports.rsa_encrypt = (text) => {
    return new Promise((resolve, reject) => {
        try{
            const pathToKey = path.resolve('D:\\Singapore\\public.key');
            fs.readFile(pathToKey, 'utf-8', (err, publicKey) => {
                if(err){
                    reject(err);
                }
                let buffer = Buffer.from(text);

                let encryted = crypto.publicEncrypt(publicKey, buffer);
                resolve(encryted.toString('base64'));
            });

        }
        catch(err){
            reject(err);
        }
    })
}

exports.rsa_decrypt = (text) => {
    return new Promise((resolve, reject) => {
        try{
            const pathToKey = path.resolve('D:\\Singapore\\private.key');
            fs.readFile(path, 'utf-8', (err, privateKey) => {
                if(err){
                    reject(err);
                }
                let buffer = Buffer.from(text, 'base64');
                let decrypted = crypto.privateDecrypt(privateKey, buffer);

                resolve(decrypted.toString('utf-8'))
            })
        }
        catch(err){
            reject (err);
        }
    })
}
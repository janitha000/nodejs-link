const Neode = require('neode');

const instance = new Neode('bolt://localhost:7687', 'neo4j', 'jibtennakoon');

exports.add_user_cypher = (user) => {
    return new Promise((resolve, reject) => {
        instance.cypher('Match (p:User {name: {user.name}, age:29}) Return p')
            .then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
    })
}

exports.add_user = (user) => {
    return new Promise((resolve, reject) => {
        instance.create('User', {
            name: user.name,
            age: user.age
        }).then(result => {
            console.log(result);
            resolve(result);
        }).catch(err => {
            reject(err);
        })
    })
}

exports.get_users = () => {
    return new Promise((resolve, reject) => {
        instance.cypher('Match(n) return n')
            .then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
    })
}

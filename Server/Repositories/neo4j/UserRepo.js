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

exports.get_all_nodes = () => {
    return new Promise((resolve, reject) => {
        instance.cypher('Match(n) return n')
            .then(result => {
                resolve(result);
            }).catch(err => {
                reject(err);
            })
    })
}

exports.get_users = () => {
    let users = [];
    return new Promise((resolve, reject) => {
        instance.cypher('Match(a:User) return a')
            .then(result => {
                result.records.forEach(item => {
                    let user = {
                        name : item._fields[0].properties.name,
                        id : item._fields[0].identity.low
                    }
                    users.push(user);
                })
                resolve(users)
            }).catch(err => {
                reject(err);
            })
    })
}

exports.get_companies = () => {
    let companies = [];
    return new Promise((resolve, reject) => {
        instance.cypher('Match(a:Company) return a.name')
            .then(result => {
                result.records.forEach(item => {
                    companies.push(item._fields[0]);
                })
                resolve(companies);
            }).catch(err => {
                reject(err);
            })
    })
}

exports.get_user_by_name = (userName) => {
    let friends = [];
    return new Promise((resolve, reject) => {
        instance.cypher('match(:User{name:$name}) -[:FRIEND_OF] -(b) - [:EMPLOYEE_OF] -(c) return b.name, c.name', {name : userName})
            .then(result => {
                result.records.forEach(item => {
                    friends.push(item._fields);
                    resolve(friends);
                })
            }).catch(err => {
                reject(err)
            })
    })
}

exports.get_compnay_by_name = (companyName)=> {
    let employees = [];
    return new Promise((resolve, reject) => {
        instance.cypher('match(:Company{name:$name}) -[:EMPLOYEE_OF]-(b) return b.name', {name : companyName})
            .then(result => {
                result.records.forEach(item => {
                    employees.push(item._fields[0]);
                    
                })
                resolve(employees);
            }).catch(err => {
                reject(err);
            })
    })
}


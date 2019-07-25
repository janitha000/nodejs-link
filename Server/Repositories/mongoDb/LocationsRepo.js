const Location = require('../mongoDb/Models/location.model');

exports.add_location = (location) => {
    let newLoc = new Location(location);

    return new Promise((resolve, reject) => {
        newLoc.save(err => {
            reject(err);
        })

        resolve('Location added to the database')
    })
} 

exports.get_locations = (filter, sort) => {
    return new Promise((resolve, reject) => {
        Location.find({}).exec((err, locations) => {
            if(err){
                reject(err);
            }
            resolve(locations)
        })
    })
}

exports.get_locatoin_by_id = (id) => {
    return new Promise((resolve, reject) => {
        Location.findById(id, (err, location) => {
            if(err){
                reject(err)
            }
            resolve(location)
        })
    })
}

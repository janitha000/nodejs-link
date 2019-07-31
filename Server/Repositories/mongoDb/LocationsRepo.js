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

exports.get_locations = (params) => {
    return new Promise((resolve, reject) => {
        Location.find(params).exec((err, locations) => {
            if (err) {
                reject(err);
            }
            resolve(locations)
        })
    })
}

exports.get_locatoin_by_id = (id) => {
    return new Promise((resolve, reject) => {
        Location.findById(id, (err, location) => {
            if (err) {
                reject(err)
            }
            resolve(location)
        })
    })
}

exports.get_meta_data = () => {
    return new Promise(async (resolve, reject) => {
        let metadata = {};
        try {
            metadata.count = await getCount();
            resolve(metadata);
        }
        catch (err) {
            reject(err);
        }
    })
}

const getCount = () => {
    return new Promise((resolve, reject) => {
        Location.count((err, result) => {
            if (err)
                reject(err);
            resolve(result);
        })
    })
}


// exports.get_max_elevation = () => {
//     return new Promise((resolve, reject) => {
//         Location.aggregate([{
//             $macth: { name: "Janitha" }
//         }], (err, result) => {
//             if (err)
//                 reject(err)

//             resolve(result);
//         })
//     })
// }

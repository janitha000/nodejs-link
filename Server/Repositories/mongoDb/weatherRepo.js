const Weather = require('./Models/weather.model');

exports.get_all = (page) => {
    let skip = 20 * (page-1);
    return new Promise((resolve, reject) => {
        Weather.find({}).skip(skip).limit(20).exec((err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result);
        })
    })
}

exports.get_by_id = (id) => {
    return new Promise((resolve, reject) => {
        Weather.findById(id, (err, result)=> {
            if(err){
                reject(err)
            }
            else{
                resolve(result);
            }
        })
    })
}

exports.get_elevation = (elevation) => {
    return new Promise((resolve, reject) => {
        Weather.find({ 'elevation': elevation }).limit(20).exec((err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result);
        })
    })
}

exports.test_weather = () => {
    return new Promise((resolve, reject) => {
        //Weather.find({'waveMeasurement.waves.height' : { $gt : 0.5} , 'pressure.value' : {$lt : 1000}},'waveMeasurement.waves.height pressure.value').limit(10).exec((err, result) => {
        Weather.find({ 'position.coordinates': {$not : { $lt: 50 } }}, 'position').limit(10).explain().exec((err, result) => {
        // Weather.find({ 'position': {'coordinates': null}}, 'position').limit(10).exec((err, result) => {
        // Weather.aggregate([
        //     { $group: {  _id : '$type', same_type : {$sum : 1} }},
        //     { $sort : {same_type: -1} }
        // ]).explain().exec((err, result) => {
            if(err){
                reject(err)
            }

            resolve(result);
        });
    })
}

exports.get_time_by_id = (id) => {
    return new Promise((resolve, reject) => {
        Weather.findById(id , (err, result) => {
            if(err){
                reject(err);
            }
            else{
                const id = result.id;
                let time = id.getTimestamp();
                resolve(time);
            }
        })
    })
}
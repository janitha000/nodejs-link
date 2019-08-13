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

exports.get_max = (item) => {
    return new Promise((resolve, reject) => {
        if(item == 'wind'){
            Weather.find({'wind.speed.rate' : {$ne : 999.9}}, 'wind.speed.rate').sort('-wind.speed.rate').limit(1).exec((err, result) => {
                if(err){
                    reject(err)
                }
                resolve(result);
            })
        }
        else if(item == 'tempreture'){
            Weather.find({'airTemperature.value' : {$ne : 999.9}}, 'airTemperature.value').sort('-airTemperature.value').limit(1).exec((err, result) => {
                if(err){
                    reject(err)
                }
                resolve(result);
            })
        }
        else if(item == 'pressure'){
            Weather.find({'pressure.value' : {$ne : 9999.9}}, 'pressure.value').sort('-pressure.value').limit(1).exec((err, result) => {
                if(err){
                    reject(err)
                }
                resolve(result);
            })
        }

    })
}

exports.get_count = () => {
    let count = 0;
    return new Promise((resolve, reject) => {
        const initialTime = Date.now();
        const stream = Weather.find({}).lean().cursor();

        stream.on('data', () => {
            count +=1;
        })

        stream.on('close', () => {
            const totalTime = Date.now() - initialTime;
            console.log(`Total count ${count} calcalated in ${totalTime}`)
            resolve(`Total count ${count} calcalated in ${totalTime}`);
        })
    })
}
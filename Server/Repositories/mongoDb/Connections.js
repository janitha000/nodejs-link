const mongoose = require('mongoose');

class Connection {
    StartConnectionWeather (){
        const mongodbUrl = 'mongodb+srv://root:root@cluster0-0e4wi.mongodb.net/sample_weatherdata?retryWrites=true&w=majority';
        mongoose.connect(mongodbUrl, (err, result) => {
            if(err){
                console.log(err)
            }

        })

        mongoose.Promise = global.Promise;
        
        const connection = mongoose.connection;
        connection.on('error', console.error.bind(console, 'MongoDb connection error '));
        connection.on('connecting', console.log.bind(console, 'Connecting to MongoDB ........'));
        connection.on('connected', console.log.bind(console, 'Connected to MongoDB for weather'));
        connection.on('disconnecting', console.log.bind(console, 'Disconnecting from MongoDB .......'))
        connection.on('disconnected', console.log.bind(console, 'MongoDB Disconnected'));

    }

    StartConnectionAirBnB() {
        const mongodbUrl = 'mongodb+srv://root:root@cluster0-0e4wi.mongodb.net/sample_airbnb?retryWrites=true&w=majority';
        mongoose.connect (mongodbUrl).then(() => console.log('Connected')).catch(err => console.log(err));

        const connection = mongoose.connection;
        connection.on('error', console.error.bind(console, 'MongoDb connection error '));
        connection.on('connecting', console.log.bind(console, 'Connecting to MongoDB ........'));
        connection.on('connected', console.log.bind(console, 'Connected to MongoDB for AirBnb'));
        connection.on('disconnecting', console.log.bind(console, 'Disconnecting from MongoDB .......'))
        connection.on('disconnected', console.log.bind(console, 'MongoDB Disconnected'));
    }
}

module.exports = new Connection;


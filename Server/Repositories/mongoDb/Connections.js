const mongoose = require('mongoose');

class Connection {
    StartConnection (){
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
        connection.on('connected', console.log.bind(console, 'Connected to MongoDB'));
        connection.on('disconnecting', console.log.bind(console, 'Disconnecting from MongoDB .......'))
        connection.on('disconnected', console.log.bind(console, 'MongoDB Disconnected'));

    }
}

module.exports = new Connection;


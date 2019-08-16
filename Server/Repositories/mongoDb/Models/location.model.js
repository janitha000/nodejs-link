const mongoose = require('mongoose');


let locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    coordinates: { type: Array },
    elevation: { type: Number },
    date: { type: Date, default: Date.now },
    weather : {type: mongoose.Schema.Types.ObjectId, ref: 'Data'}
});


module.exports = new mongoose.model('Location', locationSchema);
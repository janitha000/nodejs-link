const mongoose = require('mongoose');


let locationSchema = new mongoose.Schema({
    name: { type: String, required: true },
    coordinates: { type: Array },
    elevation: { type: Number },
    date: { type: Date, default: Date.now }
});


module.exports = new mongoose.model('Location', locationSchema);
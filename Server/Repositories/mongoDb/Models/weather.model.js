const mongoose = require('mongoose');

const weatherSchema = mongoose.model('Data', new mongoose.Schema(), 'data');

module.exports = weatherSchema;
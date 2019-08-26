const mongoose = require('mongoose');

const airbnbSchema = mongoose.model('ListingsAndReviews', new mongoose.Schema(), 'listingsAndReviews');

module.exports = airbnbSchema;
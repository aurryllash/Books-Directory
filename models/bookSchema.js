const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    release_year: String,
    genres: [String]
});

module.exports = mongoose.model('book', bookSchema);

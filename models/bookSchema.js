const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    release_year: {
        type: String,
        require: true
    },
    genres: {
        type: [String],
        require: true
    },
    description: {
        type: String,
        require: true
    }
}, {timestamps: true});

module.exports = mongoose.model('book', bookSchema);

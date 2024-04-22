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
        }
})

const book = mongoose.model('book', bookSchema);

module.exports = book

const book = require('../models/bookSchema')

const get_all_books = (req, res) => {
    book.find().sort({ createdAt: -1 })
        .then(result => {
            res.render('books', { result })
        })
        .catch(err => {
            console.log(err)
            res.status(500).send("Internal Server Error");
        })
}

const add_books = (req, res) => {
    res.render('addBooks')
}
const add_books_post = (req, res) => {
    const genres = req.body.genres.split(',');
    req.body.genres = genres;
    const newBook = new book(req.body);
    console.log(req.body)
    newBook.save()
        .then(result => {
            res.redirect('/books')
        })
        .catch(err => console.log(err))
}

const delete_books = (req, res) => { 
    const id = req.params.id
    console.log(id)
    book.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/books' })
        })
        .catch(err => console.log(err))  
}

module.exports = { get_all_books, add_books, add_books_post, delete_books }
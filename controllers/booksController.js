const Book = require('../models/bookSchema')

const get_all_books = (req, res) => {
    Book.find().sort({ createdAt: -1 })
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
    const newBook = new Book(req.body);
    newBook.save()
        .then(result => {
            res.redirect('/books')
        })
        .catch(err => console.log(err))
}

const delete_books = (req, res) => { 
    const id = req.params.id
    Book.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/books' })
        })
        .catch(err => console.log(err))  
}

const get_book_details = (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then(result => {
            if(!result) {
                return res.status(404).render('404');
            }
            res.render('book-details', { result });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        })
    
}

const update_book_form = (req, res) => {
    const id = req.params.id;
    Book.findById(id)
        .then(result => {
            if(!result) {
                return res.status(404).render('404');
            }
            res.render('book-update', { result });
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Internal Server Error');
        })
}

const update_book_put = (req, res) => {
    const id = req.params.id;
    const newBody = req.body
    console.log(newBody)
    // Book.findByIdAndUpdate(id, newBody)
    //     .then(result => req.json(result))
    //     .catch(err => console.log(err))
    Book.replaceOne({_id: id}, req.body)
        .then(response => {
            res.json(response)
        })
}

module.exports = { get_all_books, add_books, add_books_post, delete_books, get_book_details, update_book_form, update_book_put }

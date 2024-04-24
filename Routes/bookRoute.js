const express = require('express');
// const app = express();
// app.use(express.json());
const router = express.Router();
const books = require('../controllers/booksController')
const Book = require('../models/bookSchema')

router.use(express.json())

router.get('/', books.get_all_books)
router.get('/add', books.add_books)
router.post('/', books.add_books_post )
router.delete('/:id', books.delete_books )
router.get('/details/:id', books.get_book_details )
router.get('/update/:id', books.update_book_form )
router.put('/details/:id', (req, res) => {
    const id = req.params.id;
    const newBody = req.body
    console.log(req.body)
    console.log(id)

    // Book.findByIdAndUpdate(id, newBody)
    //     .then(result => req.json(result))
    //     .catch(err => console.log(err))

    Book.replaceOne({_id: id}, req.body)
        .then(response => {
            res.json(response)
        })
        .catch(err => console.log(err))  
    })

module.exports = router
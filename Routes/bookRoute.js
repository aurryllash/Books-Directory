const express = require('express');
const router = express.Router();
const books = require('../controllers/booksController')

router.get('/', books.get_all_books)
router.get('/add', books.add_books)
router.post('/', books.add_books_post )
router.delete('/:id', books.delete_books )
router.get('/details/:id', books.get_book_details )
router.get('/update/:id', books.update_book )

module.exports = router
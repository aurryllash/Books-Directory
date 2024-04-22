const express = require('express');
const router = express.Router();
const books = require('../controllers/booksController')

router.get('/', books.get_all_books)
router.get('/add', books.add_books)
router.post('/', books.add_books_post )
router.delete('/:id', books.delete_books )

module.exports = router
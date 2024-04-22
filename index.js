const express = require('express');
const mongoose = require('mongoose');
const book = require('./models/bookSchema')

const app = express();

const mongoDbUrl = "mongodb://127.0.0.1:27017/myDb";

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log("database is connected successfully!")
        app.listen(3000, () => console.log('Express server is running on port 3000'))
    })
    .catch(err => console.log("MongoDB connection error: " + err));
    

app.get('/books', (req, res) => {
    book.find()
        .then(result => {
            res.send(result)
            console.log(result)
        })
        .catch(err => {
            console.log(err)
            res.status(500).send("Internal Server Error");
        })
})
app.get('/', async (req, res) => {
    const bookModel = await book.find();
    res.json(bookModel)
})
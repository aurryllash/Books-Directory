const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bookRoutes = require('./Routes/bookRoute')



app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs');



const mongoDbUrl = "mongodb://127.0.0.1:27017/myDb";

mongoose.connect(mongoDbUrl)
    .then(() => {
        console.log("database is connected successfully!")
        app.listen(3000, () => console.log('Express server is running on port 3000'))
    })
    .catch(err => console.log("MongoDB connection error: " + err));

// Book Routes
app.use('/books', bookRoutes)


app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about');
})
app.get('/users', (req, res) => {
    res.render('users');
})



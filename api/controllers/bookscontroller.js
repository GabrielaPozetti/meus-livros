const express = require ('express');
const Book = require('../model/book');
const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const book = await Book.create(req.body);
        console.log(book)

        return res.send(book);
    } catch(err){
        console.log(err)
        return res.status(400).send({error: 'Registration failed'});
    }
});

router.get('/list', async (req, res) => {
    try{
        const books = await Book.find();
        return res.send(books);
    }catch(err){
        return res.status(400).send({error: 'Return '});
    }
});

module.exports = app => app.use('/book', router);
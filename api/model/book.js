const mongoose = require('../database');

const bookSchema = new mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    author: {
        type: String,
        require: true,
    },
    status:{
        type: String,
        require: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
});

const Book = mongoose.model ('Book', bookSchema);

module.exports = Book;
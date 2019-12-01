const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const booksSchema = new Schema({
    title: {type: String, required: true},
    comment: {type: Array}
},{
    timestamps: true
});

const Books = mongoose.model("Books", booksSchema);

module.exports = Books;
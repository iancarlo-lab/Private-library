const router = require('express').Router();
const Books = require('../models/booksModel');

router.route('/').get((req, res) => {
    Books.find()
        .then(books => res.json(books))
        .catch(error => res.status(400).json('Error: '+ error));
});

router.route('/add').post((req,res) => {
    const title = req.body.title;
    const comment = req.body.comment;

    const newBook = new Books({
        title,
        comment
    });

    newBook.save()
        .then(() => res.json('Book saved succesfully!'))
        .catch(error => res.status(400).json('Error: ' + error));
})

router.route('/:id').get((req, res) => {
    Books.findById(req.params.id)
        .then(book => res.json(book))
        .catch(error => res.status(400).json(error));
});

router.route('/update/:id').put((req,res) => {
    Books.findByIdAndUpdate(req.params.id)
        .then( book => {
            book.title = req.body.title;
            book.comment = req.body.comment;
        
            book.save()
                .then(() => res.json("Book's comments updated succesfully!"))
                .catch(error => res.status(400).json('Error: ' + error));
        })
        .catch(error => res.status(400).json('Error: '+ error));
});

router.route('/:id').delete((req, res) => {
    Books.findByIdAndDelete(req.params.id)
        .then(() => res.json("Books deleted succesfully"))
        .catch(error => res.status(400).json('ERROR: ' + error));
});

module.exports = router;
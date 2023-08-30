const Author = require('../models/author.model')

module.exports.createAuthor = (req, res) => {
    // Mongoose's "create" method is run using our Author model to add a new author to our db's authors collection.
    Author.create(req.body)   //This will use whatever the body of the client's request sends over
        .then(author => res.json(author))
        .catch(err => console.log(err))
}
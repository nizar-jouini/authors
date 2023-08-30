const Author = require('../models/author.model')

module.exports.createAuthor = (req, res) => {
    // Mongoose's "create" method is run using our Author model to add a new author to our db's authors collection.
    Author.create(req.body)   //This will use whatever the body of the client's request sends over
        .then(author => res.json(author))
        .catch(err => console.log(err))
}

module.exports.getAllAuthors = (req, res) => {
    // Mongoose's "find" method is run using our author model to get all authors from our db's authors collection
    Author.find()
        .then(author => res.json(author))
        .catch(err => console.log(err))
}

module.exports.getOneAuthor = (req, res) => {
    // Mongoose's "findOne" method is run using our author model to find one author from our db's authors collection
    Author.findOne({_id:req.params.id})
        .then(author => res.json(author))
        .catch(err => console.log(err))
}

module.exports.updateOneAuthor = (req, res) => {
    // Mongoose's "findOneAndUpdate" method is run using our author model to find and update one author from our db's authors collection
    Author.findOneAndUpdate({_id:req.params.id}, req.body, {new:true})
        .then(author => res.json(author))
        .catch(err => console.log(err))
}

module.exports.deleteOneAuthor = (req, res) => {
    // Mongoose's "deleteOne" method is run using our author model to delete one author from our db's authors collection
    Author.deleteOne({_id:req.params.id})
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => console.log(err))
}
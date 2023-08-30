const AuthorController = require('../controllers/author.controllers')

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createAuthor) // add new author
    app.get('/api/authors', AuthorController.getAllAuthors) //get all authors
}
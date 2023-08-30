const AuthorController = require('../controllers/author.controllers')

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createAuthor) // add new author
}
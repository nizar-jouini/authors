const AuthorController = require('../controllers/author.controllers')

module.exports = (app) => {
    app.post('/api/authors', AuthorController.createAuthor) // add new author
    app.get('/api/authors', AuthorController.getAllAuthors) //get all authors
    app.get('/api/authors/:id',AuthorController.getOneAuthor)  // get one author by id
    app.put('/api/authors/edit/:id', AuthorController.updateOneAuthor)  // update one author by id
    app.delete('/api/authors/:id', AuthorController.deleteOneAuthor)  // delete one author by id
}
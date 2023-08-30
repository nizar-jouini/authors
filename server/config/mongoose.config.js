const mongoose = require('mongoose')

//This will create a database named "authors" if one doesn't already exist (no need for mongo shell!):
mongoose.connect("mongodb://127.0.0.1:27017/author", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Established a connection to database"))
    .catch(err => console.log("Something went wrong when connecting to database", err))
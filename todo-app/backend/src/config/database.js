const mongoose = require('mongoose');

// Substitui API de promisses do mongoose pela do Node
mongoose.Promise = global.Promise;

module.exports = mongoose.connect('mongodb://localhost:todo');


const Todo = require('./todo');

Todo.methods(['get', 'post', 'put', 'delete']);

// New: retorna o novo registro e não o velho, runvalidator: garante que ele faça as validações do mongoose
Todo.updateOptions({ new: true, runValidator: true });

module.exports = Todo;
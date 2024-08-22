const Todo = require('../models/todo')

module.exports = {
  index,
  create
}

function index(req, res) {
  const todos = Todo.getAll()
  res.json(todos)
}

function create(req, res) {
  Todo.createTodo(req.body.todo)
  res.json(Todo.getAll())
}
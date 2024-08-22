const todos = require('../todo-data')

module.exports = {
  getAll,
  createTodo
}

function getAll() {
  return todos
}

function createTodo(task) {
  const todo = { task }
  todo.id = todos.length
  todo.completed = false
  todos.push(todo)
}
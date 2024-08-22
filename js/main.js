/*---- Cached Elements -----*/
const todoListEl = document.querySelector('ul.todo-list')
const formEl = document.querySelector('form')

/*---- State -----*/
let todos

/*---- EventListeners -----*/
formEl.addEventListener('submit', handleFormSubmit)

/*---- Functions ------*/
fetchTodos()



async function fetchTodos() {
  const res = await fetch('http://localhost:3000/todos')
  todos = await res.json()
  render()
}

function render() {
  todoListEl.innerHTML = ''
  todos.forEach(todo => {
    const liEl = document.createElement('li')
    liEl.textContent = todo.task
    if (todo.completed) liEl.style.textDecorationLine = 'line-through'
    todoListEl.append(liEl)
  })
}

async function handleFormSubmit(evt) {
  evt.preventDefault()

  const todo = formEl.querySelector('input').value

  const res = await fetch('http://localhost:3000/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ todo })
  })

  todos = await res.json()
  console.log(todos)
  render()
}
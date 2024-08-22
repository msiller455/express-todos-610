const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const todosRouter = require('./routes/todos')

const PORT = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger('dev'))

app.use('/todos', todosRouter)

app.listen(PORT, function () {
  console.log(`Server running on port ${PORT}`)
})
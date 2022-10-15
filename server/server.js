const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { error_handler } = require('./middleware/error.middleware')

const port = process.env.PORT || 5000
const app = express()

connectDB(
  app.listen(port, () => {
    console.log(`Server started on port ${port}`)
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
	res.status(200).json({ msg: 'Welcome to the API' })
})

app.use('/api/goals', require('./routes/goal.routes'))
app.use(error_handler)

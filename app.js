const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const CourseRouter = require('./routes/CourseRouter')
const StudentRouter = require('./routes/StudentRouter')
const app = express()

const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => res.json({ message: 'Server Works' }))

app.use('/courses', CourseRouter)
app.use('/students', StudentRouter)

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
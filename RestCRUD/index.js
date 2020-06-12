const express = require('express')
const connectDB = require('./models/db')
const User = require('./models/User')

const app = express()
app.use(express.json())

connectDB()


app.use('/create',require('./routes/create'))

app.use('/update',require('./routes/update'))

app.use('/delete',require('./routes/delete'))

app.use('/display',require('./routes/display'))

app.listen(3000)
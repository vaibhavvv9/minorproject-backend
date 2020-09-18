var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://vaibhav:23111974@minorproject.usodh.mongodb.net/minorproject'

mongoose
  .connect(
    mongoURI,
    { useNewUrlParser: true, }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')
var Exams = require('./routes/Exams')
app.use('/users', Users)
app.use('/exams', Exams)
app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
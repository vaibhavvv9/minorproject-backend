const express = require('express')
const exams = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Exam = require('../models/Exam')
exams.use(cors())

process.env.SECRET_KEY = 'secret'

exams.post('/teacher', (req, res) => {
  
  const examData = {
    eid: req.body.eid,
    ename: req.body.ename,
    marks: req.body.marks,
    duration: req.body.duration,
    number: req.body.number,
    rows: req.body.rows,
    userId: req.body.userId
  }

  Exam.findOne({
    eid: req.body.eid
  })
    .then(exam => {
      if (!exam) {
         
          Exam.create(examData)
            .then(exam => {
              res.json({ status: exam.eid + 'added!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
    
      } else {
        res.json({ error: 'exam with this id already exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
exams.get('/teacher/:id', (req, res) => {
 // var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
 console.log("req", req.params);
 var id = req.params.id

  Exam.find({
    userId: id
  })
    .then(exam => {
      if (exam) {
        res.json(exam)
      } else {
        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = exams
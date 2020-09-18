const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ExamSchema = new Schema({
  eid: {
    type: String,
    required: true
  },
  ename: {
    type: String,
    required: true
  },
 duration: {
    type: Number,
    required: true
  },
  marks: {
    type: Number,
    required: true
  },
  number: {
    type: String,
    required: true
  },
  rows: {
    type: Array,
    required: true
  },
  userId : {
    type: String,
    required: true
  }
})

module.exports = User = mongoose.model('exams', ExamSchema)
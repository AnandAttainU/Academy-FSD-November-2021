const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
    name: String,
    age: Number,
    phno: Number,
    email: String
})

const teacherModel = mongoose.Model('teacher_details', teacherSchema);

module.exports = teacherModel;
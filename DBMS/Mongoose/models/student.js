const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    address: String,
    email: String
})

const studentModel = mongoose.model('student_details', studentSchema);

module.exports = studentModel;
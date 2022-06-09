const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    class: [
        {
            batchId: Number,
            Instructor: String
        }
    ]
})

const studentModel = mongoose.model('student_details', studentSchema);

module.exports = studentModel;

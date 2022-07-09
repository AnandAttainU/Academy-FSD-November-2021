var express = require('express');
const app = require('../app');
const studentController = require('../controller/studentController');
var router = express.Router();
var studentModel = require('../models/student');

/* GET home page. */
router.post('/', async function(req, res, next) {
    const result = await studentModel.create(req.body);
    console.log(result);
});

router.get('/:studentName', studentController)

module.exports = router;
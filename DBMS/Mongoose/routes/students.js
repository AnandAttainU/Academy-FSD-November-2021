var express = require('express');
const app = require('../app');
var router = express.Router();
var studentModel = require('../models/student');

/* GET home page. */
router.post('/', async function(req, res, next) {
    const result = await studentModel.create(req.body);
    console.log(result);
});

router.get('/:studentName', async (req, res) => {
    const { studentName } = req.params;
    try {
        const studentData = await studentModel.findOne({name: studentName});
        res.status(200).send(studentData);
    }
    catch (err){
        res.status(404).send(err);
    }
    
})

module.exports = router;
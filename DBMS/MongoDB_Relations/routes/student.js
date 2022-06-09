var express = require('express');
const studentModel = require('../models/student');
var studentRouter = express.Router();

/* GET home page. */
studentRouter.post('/', async function(req, res, next) {
    console.log("Inside student post route");
    try{
        const createResult = await studentModel.create(req.body);
        console.log(createResult);
    } catch(err){
        console.log(err, "error in try block");
    }
    
});

module.exports = studentRouter;
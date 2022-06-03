var express = require('express');
const { check, validationResult } = require('express-validator');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
// checking these header, queryparams, body, cookies
router.post('/register', 
  check('username').isEmail(),
  check('password').isStrongPassword(),

  (req, res)=>{
    const err = validationResult(req);
    if(!err.isEmpty()){
      res.status(400).json({error: err.array()});
    }
    else{
      res.status(200).send("Data registered successfully")
    }

})

module.exports = router;

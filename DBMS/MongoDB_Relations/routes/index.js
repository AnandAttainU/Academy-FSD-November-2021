var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/DBMS/MongoDB_Relations/views/student.html');
});

module.exports = router;

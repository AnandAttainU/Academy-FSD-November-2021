const express = require('express');
const app = express();

// const ejs = require('ejs');

app.get('/', (req, res)=>{
    // res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Day7 - Template Engines/index.html');
    const username = 0;
    const age = 20;
    res.render('index.ejs', { username, age })
})

app.listen(8081);

const express = require('express');

const app = express();

app.get('/', function (req, res) {
    console.log("Root url requested");
    res.send('Hello root url');
    res.end();
})

app.get('/students', (req, res)=>{
    res.send("Hello students");
    res.end();
})

app.listen(8000);


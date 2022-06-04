const express = require('express');
const app = express();

app.get('/login', (req, res)=>{
    res.sendFile(`/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Revision Day 1/views/login.html`);
})

module.exports = {
    loginRoute: app
}
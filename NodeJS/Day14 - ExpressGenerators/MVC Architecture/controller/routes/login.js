const express = require('express');

const loginRoute = express.Router();

loginRoute.get('/login', (req, res)=>{
    // console.log("at login route");
    res.sendFile(`/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Day14 - ExpressGenerators/view/index.html`);
})

module.exports = loginRoute;

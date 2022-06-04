const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const { constants } = require('../Constants/constant');
app.use(express.urlencoded());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
// const { checkAuth } = require('../Middlewares/checkAuth');

app.post('/', (req, res)=>{
    const { username, password } = req.body;
    if(username === constants.DB_USERNAME && password === constants.DB_PASSWORD){
        const token = jwt.sign({ username: username, isLogged: true }, constants.JWT_SIGNATURE);
        res.cookie("AccessToken", token, {expiresIn: constants.ONEDAY});
        res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Revision Day 1/views/root.html')
    }else {
        console.log("Wrong username/password, redirecting to login page");
        res.redirect('/login');
    }
})

const checkAuth = (req, res, next) =>{
    const token = req.cookies.AccessToken;

    jwt.verify(token, constants.JWT_SIGNATURE, (err, payload)=>{
        if(err){
            console.log("user not authenticated");
            res.redirect('/login');
        }
        else if(payload.username && payload.isLogged){
            next();
        }
    });
}

app.get('/', checkAuth, (req, res)=>{
    res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Revision Day 1/views/root.html')
})

module.exports = {
    rootRoute: app
}
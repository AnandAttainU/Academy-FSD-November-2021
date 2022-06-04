const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
app.use(cookieParser());

const checkAuth = (req, res, next) =>{
    console.log(req.signedCookies);
    // jwt.verify()
}

module.exports = {
    checkAuth
}
const express = require('express');
var session = require('express-session');
const { checkAuth } = require('./middleware');
const app = express();

const ONE_DAY = 1000 * 60 * 60 * 24;
app.use(session({
    secret: 'Yuwernsdrgwern',
    cookie: { maxAge: ONE_DAY },
    resave: true,
    saveUninitialized: true
}))

app.use(express.urlencoded());

const dbUserName = "asd";
const dbPassword = "123";

app.get('/login', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})



app.post('/users', (req, res)=>{
    const { username, password } = req.body;
    if(username === dbUserName && password === dbPassword){
        // res.cookie("uname", username, {maxAge: ONE_DAY});
        // res.send("Cookies modified");
        req.session.USERID = username;
        req.session.isLogged = true;
        // console.log(req.session);
        res.redirect('/dashboard')
    }else {
        // res.redirect('/login')
    }
})

app.get('/dashboard', checkAuth, (req, res)=> {
    res.send("Authenticated from the session info");
})

app.patch('/dashboard', checkAuth, (req, res)=>{

})

app.delete('/dashboard', checkAuth, (req, res)=>{

})

app.listen(8081);
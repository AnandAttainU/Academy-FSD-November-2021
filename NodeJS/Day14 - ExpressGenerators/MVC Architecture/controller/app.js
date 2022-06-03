const express = require('express');
const loginRoute = require('./routes/login');
const usersRoute = require('./routes/users');
const app = express();
app.use(loginRoute);
app.use(usersRoute);
// app.use(express.urlencoded());
app.use(express.json());

const dbUserName = "asd";
const dbPassword = "123";
const SIGNATURE = "ermntlkxvjserlksnrtm.ansdkadsf";



const tokenAuth = (req, res, next) => {
    next();
}

app.get('/dashboard', tokenAuth, (req, res)=> {
    res.send("Authenticated from the token info");
})

app.patch('/dashboard', tokenAuth, (req, res)=>{

})

app.delete('/dashboard', tokenAuth, (req, res)=>{

})

app.listen(8081);
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

// app.use(express.urlencoded());
app.use(express.json());

const dbUserName = "asd";
const dbPassword = "123";
const SIGNATURE = "ermntlkxvjserlksnrtm.ansdkadsf";

app.get('/login', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/users', (req, res)=>{
    const { username, password } = req.body;
    if(username === dbUserName && password === dbPassword){
        // generate the token and send to client

        const payload = { username: username, isLogged: true };

        var token = jwt.sign(payload, SIGNATURE, {algorithm: 'HS384', expiresIn: "1d"});
        
        res.json({
            jwtToken: token,
            message: "Authenticated successfully"
        })
    }else {
        res.status(401).send("Invalid Username/password");
        // res.redirect('/login')
    }
})

const tokenAuth = (req, res, next) => {
    const token = req.headers["token"];
    if(!token){
        return res.send("Token is not present");
    }
    jwt.verify(token, SIGNATURE, (err, decoded)=>{
        if(err){
            return res.status(401).send("Invalid Token");
        }
        else{
            console.log(decoded);
        }
        next()
    })
}

app.get('/dashboard', tokenAuth, (req, res)=> {
    res.send("Authenticated from the token info");
})

app.patch('/dashboard', tokenAuth, (req, res)=>{

})

app.delete('/dashboard', tokenAuth, (req, res)=>{

})

app.listen(8081);
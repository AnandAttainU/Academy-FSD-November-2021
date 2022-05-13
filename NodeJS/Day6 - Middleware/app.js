// const e = require('express');
const express = require('express');
const app = express();

// app.use(express.static('public'));

// app.use(authMiddleware);

app.get('/', (req, res, next)=>{
    const userValid = false;
    console.log("inside route level middleware");

    if(userValid){
        res.status(200).send("User is valid");
    }else{
        next(new Error("User is invalid"));
        
    }
    
})

app.use(errorMiddleware);

function errorMiddleware(err, req, res, next){
    console.log(err.message);
    res.status(401).send(err.message);
    
}

// app.use(middleware2);

// function middleware2(req, res, next) {
    
//     console.log("Something else");
//     next();
// }

// function authMiddleware(req, res, next){
//     isValidUser = false;
    
//     if(isValidUser){
//         console.log("Valid User");
//     } else {
//         console.log("Invalid User");
//     }
//     next();
// }

// app.get('/todo', (req, res)=>{
//     res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Day6 - Middleware/public/index.html');
// })

// app.get('/script.js', (req,res)=>{
//     res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Day6 - Middleware/script.js');
// })

app.listen(8090);
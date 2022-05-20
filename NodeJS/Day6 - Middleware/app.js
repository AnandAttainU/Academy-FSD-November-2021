// const e = require('express');
const express = require('express');
// const cloudinary = require('cloudinary').v2;
const app = express();

// cloudinary.config({ 
//     cloud_name: 'dtx1pez4d', 
//     api_key: '933722588754538', 
//     api_secret: '14cadtiviUAfwT1jqU_nK8vkkQM'
//   });

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

function authMiddleware(req, res, next){
    userCaptcha = req.body.Captcha;
    const userValidated = isCaptchaMatching()
    
    if(userValidated){
        next();
    } else {
        res.send("unauthenticated");
    }
}

// app.get('/todo', (req, res)=>{
//     res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Day6 - Middleware/public/index.html');
// })

// app.get('/script.js', (req,res)=>{
//     res.sendFile('/Users/anand/gitRepos/AttainU/BackEnd/NodeJS/Day6 - Middleware/script.js');
// })

app.listen(8090);
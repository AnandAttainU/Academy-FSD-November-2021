const express = require('express');

const app = express();
const data  = require('./sample.js');

// middlewear
app.use(express.json());


// map, filter, reduce


// domainName/users/1 -> should give e all the mbile owned by user 1
// domainName/mobiles?id=100 -> should give me information about mobile with id 100

// app.get('/mobiles', (req, res)=> {
//     const queryParams = req.query;
//     const userMobileInfo = data.filter((userObj)=> userObj.mobileId === Number(queryParams.id))
//     res.send(userMobileInfo);
//     res.end();
// })

// app.get('/users/:userId', (req, res)=>{
//     const userMobileInfo = data.filter((userObj)=> userObj.userId === Number(req.params.userId))
//     // console.log(data);
//     console.log(userMobileInfo);
// })

// app.get('/mobiles', (req, res)=>{
//     res.send("Mobile homepage");
//     res.end();
// })

// app.get('/mobiles/categories', (req, res)=>{
//     res.send("Mobile's categories");
//     res.end();
// })

// app.get('/mobiles/categories/:mobileId', (req, res)=>{
//     // console.log(req.params);
//     const mobileId = req.params.mobileId;
//     console.log(mobileId);
//     // const {mobileId} = req.params;
//     switch(mobileId){
//         case '1': 
//             res.send("Mobile 1");
//             res.end();
//         case '2':
//             res.send("Mobile 2");
//             res.end();
//     }
    
// })

// app.get('mobiles/categories/2', (req, res)=>{
//     res.send("Mobile 2");
//     res.end();
// })


app.post('/mobiles', (req, res)=>{
    console.log(req.body);
    data.push(req.body);
    res.send(data);
    res.end();
})




app.listen(8000);

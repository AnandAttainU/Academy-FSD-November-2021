const express = require('express');

const app = express();
const data  = require('./sample.js');

// middleware
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
    
// })

// app.get('mobiles/categories/2', (req, res)=>{
//     res.send("Mobile 2");
//     res.end();
// })


// app.post('/mobiles', (req, res)=>{
//     console.log(req.body);
//     data.push(req.body);
//     res.send(data);
//     res.end();
// })


// Display Student Marks with this url ->
// https://www.university.attainu.com/name1/1
// 
const students = [
    {
        "id": 1,
        "name": name1,
        "marks": 95
    },
    {
        "id": 2,
        "name": name2,
        "marks": 98
    }
]

// [
//     {
//     "id": 1,
//     "name": name1,
//     "marks": 95
//     }
// ]
app.get('/:studentName', (req, res)=>{
    const stName = req.params.studentName;
    const stId = req.query.id;
    const studentObjArr = students.filter((student)=>{student.id === Number(stId)})
    const marks = studentObjArr[0].marks;
    res.send(marks);
    res.end();
})

app.listen(8000)

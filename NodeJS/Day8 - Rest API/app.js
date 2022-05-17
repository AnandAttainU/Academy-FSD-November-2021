const express = require('express');
const app = express();

app.use(express.json());
let users = require('./users.js');

app.get('/users', (req, res)=> {
    res.send(users);
})

app.get('/users/:id', (req, res)=>{
    const {id} = req.params;
    const userInfo = users.filter((user)=>user.id===Number(id));
    res.send(userInfo);
})

app.post('/users', (req, res)=>{
    const userData = req.body;
    users.push(userData);
    res.send("User Created Successfully");
})

app.put('/users/:id', (req,res)=>{
    const userData = req.body;
    const {id} = req.params;
    users = users.map(user => {
        if(user.id === Number(id)) {
            return userData
        } else {
            return user
        }
    })
    res.send("Data has been updated");
})

app.delete('/users/:id', (req, res)=>{
    const {id} = req.params;

    users = users.filter(user => user.id !== Number(id));
    res.send("Deleted Successfully");
})

app.listen(8082);
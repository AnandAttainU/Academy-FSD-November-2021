const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/main', (req,res)=>{
    const {username, password} = req.body;
    console.log(username, password);
})

app.listen(8081);
const express = require('express');
const { MongoClient } = require('mongodb');

const Mongo_URL = "mongodb+srv://ananddidwania:anand111@cluster0.kw2phjb.mongodb.net/?retryWrites=true&w=majority"
const app = express();
app.use(express.urlencoded());

const client = new MongoClient(Mongo_URL);

app.get('/login', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

app.post('/details', async (req, res)=>{
    // console.log(req.body);
    // Connect this application to the cloud database server
    await client.connect();
    // Adding this data req.body to my cloud database
    const databaseName = client.db('Institute');
    const collectionName = databaseName.collection('student_details');
    const result = await collectionName.insertOne(req.body)
    console.log(result);
})

app.get('/details', async (req, res)=>{
    await client.connect();
    // Adding this data req.body to my cloud database
    const databaseName = client.db('Institute');
    const collectionName = databaseName.collection('student_details');
    const studetsDetails = await collectionName.find({}).toArray();
    res.send(studetsDetails);
})

app.listen(8081);
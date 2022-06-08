const express = require('express');
const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');
const result = dotenv.config()
const app = express();
app.use(express.urlencoded());

const client = new MongoClient(process.env.Mongo_URL);

app.get('/login', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

let student_collection = null;

const initializeMongoClient = async () => {
    // Connect this application to the cloud database server
    await client.connect();
    // Adding this data req.body to my cloud database
    const databaseName = client.db('Institute');
    student_collection = databaseName.collection('student_details');
    teacher_collection = databaseName.collection('teacher_details');
}
initializeMongoClient();

app.post('/details', async (req, res)=>{
    // console.log(req.body);
    const result = await student_collection.insertOne(req.body)
    console.log(result);
})

app.get('/details', async (req, res)=>{
    const studetsDetails = await student_collection.find({}).toArray();
    res.send(studetsDetails);
})

app.listen(8081);
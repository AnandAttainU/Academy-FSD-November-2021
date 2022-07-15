const express = require('express');
const app = express();
app.use(express.json());
const { Products } = require('./data');

app.get('/products', (req, res)=>{
    res.status(200).send(Products);
});

app.post('/products', (req, res)=>{
    const { id, name, price, imageURL, inStock } = req.body;
    Products.push({
        id: id,
        name: name,
        price: price,
        imageURL: imageURL,
        inStock: inStock
    })
    res.status(201).send(Products);
});

app.put('/products', (req, res)=>{

});

app.delete('/products', (req, res)=>{

});

// app.listen('3000', ()=>{
//     console.log("express server is running");
// })

module.exports = {
    app
}
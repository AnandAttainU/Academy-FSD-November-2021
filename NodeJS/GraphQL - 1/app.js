const express = require('express');
const app = express();
const { graphql, buildSchema } = require('graphql');
const { graphqlHTTP } = require('express-graphql');
const Products = require('./data');

// 1. Building schema
// type query -> GET/Fetch
// type Mutation -> Post, Put, Delete
// type Subscribe -> Auto-populate/creating connection -> web socket

const productSchema = buildSchema(`
    type Product {
        name: String!,
        price: Int!,
        imageURL: String,
        inStock: Boolean,
        id: Int!
    },
    type Query {
        getProducts: [Product],
        getProductDetails(id: Int!): Product,
        getDiscountedPrice(id: Int!, code: String): Int
    },
    type Mutation {
        addProduct(
            name: String,
            price: Int,
            imageURL: String,
            inStock: Boolean,
            id: Int): Int,
        changeName(
            id: Int!,
            newName: String!
        ): Int,
        deleteProduct(
            id: Int!
        ): Boolean
    }
`)

// 2. Creating Resolver functions
const resolvers = {
    // Fetch the data from the Database
    getProducts: ()=>{
        return Products;
    },
    getProductDetails: (args)=>{
        id = args.id;
        foundProduct = Products.find(product=>product.id === Number(id));
        return foundProduct;
    },
    getDiscountedPrice: (args)=>{
        code = args.code;
        id = args.id;
        // console.log(Products);
        reqProductArr = Products.filter(product => product.id === Number(id));
        console.log(reqProductArr);
        price = reqProductArr[0].price;
        if(code){
            return price - (price*15/100);
        } else {
            return price;
        }
    },
    addProduct: (args)=>{
        const { id, name, price, imageURL, inStock } = args;
        Products.push({
            id: id,
            name: name,
            price: price,
            imageURL: imageURL,
            inStock: inStock
        })
        console.log(Products);
        return id;
    },
    changeName: (args)=>{
        const { id, newName } = args;
        productToBeUpdated = Products.find(product => product.id === Number(id));
        productToBeUpdated.name = newName;
        console.log(productToBeUpdated);
        return id;
    },
    deleteProduct: (args)=>{
        const id = args.id;
        newProductsArr = Products.filter(product => product.id!==Number(id));
        if(newProductsArr.length===Products.length){
            return false;
        }
        console.log(newProductsArr);
        return true;
    }
}

// 1. using find function
// 2. using the filter function itself

// [1,2,3,5] => Products
// delete 4
// [1,2,3,5] => newArr
// delete 2
// [1,3,5]
// check if the id is existing in the array of products
// then it will delete and return true
// else it will return false

app.get('/', (req, res)=>{
    res.send("Node server is running");
})

// 3. configuring graphql endpoint
app.use('/graphql', graphqlHTTP({
    schema: productSchema,
    rootValue: resolvers,
    graphiql: true,
    context: ({req})=>{
        token = req.headers["token"]
    }
}))

app.listen(8080);


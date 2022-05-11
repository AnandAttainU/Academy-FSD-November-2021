// import {print} from './app.js'; - ES6
// const obj = require('./app.js');

// obj.output("Student");
// obj.sum(3,4);

// http -> built in module


const http = require('http');
const server = http.createServer(
    (request, response) => {
        if(request.url==="/"){
            response.write("Hello All");
            response.end();
        } else if(request.url === "/students"){
            response.write("Hello Students");
            response.end();
        }
    }
) // callback function which will called if someone requests to the server

server.listen(8080); // port number


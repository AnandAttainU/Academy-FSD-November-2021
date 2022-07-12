const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
// Creating the socket server
const socketServer = new Server(httpServer);

app.use(express.static('public'));

// handler for client connecting to server
socketServer.on('connection', (connectionObject)=>{
    console.log("client has connected");
    console.log(connectionObject.id);

    // event handler for custom event sendData
    connectionObject.on('sendData', (msg)=>{
        if(msg){
            // broadcasting message to all the other client except self
            connectionObject.broadcast.emit('broadcastMessage', msg.text);
        }
    })
})

httpServer.listen('3000', ()=>{
    console.log("express server is running");
})
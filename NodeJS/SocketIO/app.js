const express = require('express');
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const socketServer = new Server(httpServer);

app.use(express.static('public'));

socketServer.on('connection', (connectionObject)=>{
    console.log("client has connected");
    console.log(connectionObject.id);

    connectionObject.on('sendData', (msg)=>{
        if(msg){
            switch(msg.receiver){
                case "999":
                    connectionObject.broadcast.emit('broadcastMessage', msg.text);
                    break;
                case "100":
                    connectionObject.broadcast.emit('broadcastMessage', "This data is private");
                    break;
                default:
                    connectionObject.broadcast.emit('broadcastMessage', "You can not send data");
            }
            
        }
    })
})

httpServer.listen('3000', ()=>{
    console.log("express server is running");
})
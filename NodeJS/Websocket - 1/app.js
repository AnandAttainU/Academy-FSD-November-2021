const express = require('express');
const { WebSocketServer } = require('ws');
const app = express();

app.use(express.static('public'));

// Create the Web socket server
const webSocketServer = new WebSocketServer({
    port: 8080
})

// Event handler for server connection
webSocketServer.on('connection', (connectionObj)=>{
    console.log("wss connected");

    // event handler to capture the message
    connectionObj.on('message', (msg)=>{
        console.log(msg.toString());
    })

    setInterval(()=>{
        connectionObj.send("Message coming from server");
    },1000)

    // handler for connection close event
    connectionObj.on('close', ()=>{
        console.log("connection is closed");
    })
})

// event handler for server close event
webSocketServer.on('close', ()=>{
    console.log("web socket server is closed");
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000");
})
// Connecting the client to wss server
const wsConnection = new WebSocket("ws://localhost:8080");

// Sending the message to wss server
const inputEle = document.getElementById('inputEle');
inputEle.addEventListener('keydown', (e)=>{
    const inputValue = e.target.value;
    wsConnection.send(inputValue);
})

// Capturing the message from server
wsConnection.addEventListener('message', (msg)=>{
    console.log(msg.data);
})

// open event gets triggered first time when connection is made
wsConnection.addEventListener('open', ()=>{
    console.log("web socket connection opened");
})

wsConnection.addEventListener('close',()=>{
    console.log("web socket server is closed");
})
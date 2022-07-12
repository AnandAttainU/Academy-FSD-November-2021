// creating socket object
const socket = io();

// connecting to the socket server
socket.on('connect', ()=>{
    console.log("Connected to server");
})

// All the html elements
const inputEle = document.getElementById('inputTag');
const buttonEle = document.getElementById('sendButton');
const myMsg = document.getElementById('chatMessage');
const broadcastMsg = document.getElementById('broadcastMsg');

buttonEle.addEventListener('click', ()=>{
    // creating the input object
    const data = {
        text: inputEle.value
    }

    myMsg.innerText = data.text;
    // sending the input data to custom event sendData
    socket.emit('sendData', data);

})

// handling the broadcasted message
socket.on('broadcastMessage', (data)=>{
    broadcastMsg.innerText += data;
})


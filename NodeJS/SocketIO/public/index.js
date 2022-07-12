const socket = io();

socket.on('connect', ()=>{
    console.log("Connected to server");
})

const inputEle = document.getElementById('inputTag');
const buttonEle = document.getElementById('sendButton');
const receiverEle = document.getElementById('receiver');
const myMsg = document.getElementById('chatMessage');
const broadcastMsg = document.getElementById('broadcastMsg');

buttonEle.addEventListener('click', ()=>{
    const data = {
        text: inputEle.value,
        receiver: receiverEle.value
    }

    myMsg.innerText = data.text;

    socket.emit('sendData', data);

})

socket.on('broadcastMessage', (data)=>{
    broadcastMsg.innerText += data;
})


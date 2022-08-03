
const counterEle = document.getElementById('counter');
let counter = 0

const increment = ()=>{
    counter++;
    counterEle.innerText = `Counter value is ${counter}`;
}


const decrement = ()=>{
    counter--;
    counterEle.innerText = `Counter value is ${counter}`;
}
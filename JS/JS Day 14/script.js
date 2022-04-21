// http request
// 
// https://jsonplaceholder.typicode.com/users/1
// 
// Ajax - Asynchronous Javascript and JSON/XML

function getData() {
    let requestObj = new XMLHttpRequest();
    requestObj.open('GET', 'https://jsonplaceholder.typicode.com/users/2');

    requestObj.onload = function() {
        // JSON.parse() - It will take the string as parameter and converts to JSON
        // JSON.stringify() - takes JSON as parameter and converts to string
        if (requestObj.status === 200){
            let res = JSON.parse(requestObj.response);
            const name = res.name;
            const city = res.address.city;
            const website = res.website; 
            spanEle.innerText = `Name: ${name} City: ${city} Website: ${website}`;
        }
    }

    requestObj.onerror = function() {
        console.log(requestObj);
        console.log("Error!!");
    }

    requestObj.send();
}


const spanEle = document.getElementById("showData");
let btnEle = document.getElementById("getBtn");
btnEle.addEventListener('click', getData);


// fetch method - Asynchronous method
// async await

function getData() {
    let response = fetch('https://v2.jokeapi.dev/joke/Any') // returns Promise -> resolved/ rejected

    let promiseResponse = response.then(onSuccess, onFailure);
    console.log(promiseResponse);

    function onSuccess(res) { // Method returns Promise, which has data on resolved
        console.log(res);
        var jsonResponse = res.json();
        return jsonResponse;
    }
    
    function onFailure(error) {
        console.log("Error: " + error);
    }
    
    promiseResponse.then(onPromiseSuccess, onPromiseError)

    function onPromiseSuccess(data) {
        if(data.error) {
            alert("No Joke Found!!");
        }else {
            if(data.type === 'single') {
                spanEle.innerText = data.joke;
            } else {
                spanEle.innerText = data.setup + "--" + data.delivery;
            }
        }
    }

    function onPromiseError(err) {
        console.log(err);
    }
}




const spanEle = document.getElementById("showData");
let btnEle = document.getElementById("getBtn");
btnEle.addEventListener('click', getData);
// // btnEle.addEventListener('click', () => {
// //     fetch('https://v2.jokeapi.dev/joke/Ay')
// //         .then(res=>res.json(), err=>console.log(err))
// //             .then((data)=>{
// //                 if(data.error) alert("No Joke Found!!");
// //                 else {
// //                     if(data.type === 'single') spanEle.innerText = data.joke; 
// //                     else spanEle.innerText = data.setup + "--" + data.delivery;
// //                 }
// //             }, error => console.log(error))
// // });

// btnEle.addEventListener('click', asyncMethod);

// async function asyncMethod(){
//     var response = await fetch('https://v2.jokeapi.dev/joke/Any');
//     var jsonData = await response.json();
//     console.log(jsonData);
// }




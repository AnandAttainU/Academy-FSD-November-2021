// Custom Promise
// Async await
// Try... catch
// Rest and Spread operator

// function fetch(url){
//     return new Promise(()=>{
//         // It is calling the http request to url
//     })
// }

// Custom Promise

let flag = true;
let promiseObj = new Promise((resolve, reject)=>{
    // async process
    if(flag){
        setTimeout(()=>{
            console.log("The timer is out.");
            // This parameter will be passed to .then(onSuccess) method
            resolve("This is resolve parameter");
        }, 3000)
    }
    else {
        reject("Reject parameter");
    }
}); // This will create a object of Promise class
console.log(promiseObj);
promiseObj.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
})


async function getData() {
    try {
        let response = await fetch(''); // returns Promise -> resolved/ rejected
        let data = await response.json();
        console.log("Inside try block");
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

const spanEle = document.getElementById("showData");
let btnEle = document.getElementById("getBtn");
btnEle.addEventListener('click', getData);



// Rest and Spread operator - ...

// Rest operator
// nums = [3,4,5,6,7,8,9,10]
function sum(n1, n2, ...nums) {
    console.log(n1);
    console.log(n2);
    console.log(nums);
    // let sum = n1 + n2;
    // for(i=0;i<nums.length;i++){
    //     sum += nums[i];
    // }
    // return sum;
}

// const total1 = sum(3, 4, 5, 6, 7, 8, 9, 10);
const total2 = sum(3, 2, [1, 2], 12, 13);
// const total3 = sum(1, 23, 4, 5, 65);
console.log(total2);


// Spread operator -> works on all iteratable objects
const nums = [1,2,3,4,5];
console.log(nums);
console.log(...nums); // console.log(1,2,3,4,5);

const st = "Soemthing";
console.log(...st);

// Use case of Spread operator
// Copy the array
const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9];

console.log(...arr1);
// ...arr1 -> 1,2,3
// ...arr2 -> 4,5,6
// [1,2,3,4,5,6];
const finalArr = [...arr1,...arr2,...arr3];

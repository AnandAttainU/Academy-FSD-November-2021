// can you guys see my screen?// cool, lets start.

//Q1. Write a JavaScript program that prints even numbers from 1 to 100 
//in descending order in the
//browser console. (7.5 Marks)

// Basically we need to traverse all the numbers from 100 to 1
// which means we will use a loop -> for/whie/do while etc
// 
for(let i=100; i>=1; i--){
    if(i%2===0){
        console.log(i);
    }
}

// Difference between == and ===?
// 

// Q2. Display a multiplication table of a number like so in the browser console.
// read this 2 times.

// 5 * 1 = 5
// 5 * 2 = 10
// ..and so on

// Tell me how will you approach this?
// from this cc only, 4 cc will be enabled everyday. And please everyone
// submit cc.

// okay so let's solve with basic approach
// yes correct, most of you are correct.

// let's start implementing. and will think while doing it.


// 1. Create a function which will print the table of a given number.

function printTable(num, limit=10 /*This is how we set default value*/ ) {
    for(let i =1; i<=limit; i++){
        // here i is representing the limit.
        // which is 10 be default(if not given by user)
        console.log(`${num} * ${i} = `, num*i);
        // is this line (42) clear to everyone?
        // if not, tell me
    }
    // now, how to set the value = 10, when it is not given by user?
}
let num = prompt("Enter the number for which you want table?");
let limit = prompt("tell the limit for the table");
printTable(num, limit);
// This is called "template string"

// Clear?
// This is how to take input from user and you can store in a variable.

// You can't do that in js
// Depending on the operator it will convert.

// Let's go with 2nd CC
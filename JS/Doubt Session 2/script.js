// Q1
// x = 3;
// console.log(x);
// var x;


// Q2
// console.log(fun());
// function statment
// function fun() {
//     return 22;
// }


// Q3
// console.log(fun);
// // function expression
// var fun = function(){
//     return 22;
// }

// Q4
// function doSomethin(){
//     x = 33;
//     console.log(x);
//     var x;
// }
// doSomethin();
// console.log(x);

// Q5
// var x = 22;
// var y = "22";
// console.log(x===y);

// == -> Value
// === -> Value & type

// Q6
// var x = "something";
// function add(n1, n2){
//     return x;
// }
// function subtract(n1, n2){
//     return add(n1, n2);
// }
// console.log(subtract(8, 6));

// Q7
// var x = "something";
// function add(n1, n2){
//     var y = "nothing";
//     function subtract(n3, n4){
//         var z = "anything";
//         return y+n3;
//     }
//     return subtract(n1, n2);
// }
// console.log(add(4, 6));

// Q8
// if(false){
//     var x = 10;
// }
// console.log(x);

// Q9
// {
//     var x = 10;
// }
// console.log(x);

// Q10
// var x = 10;
// console.log(x);
// setTimeout(fun, 1000);
// console.log(x);
// function fun(){
//     x = 100;
//     console.log(x);
// }

// Q11
// var x = 10;
// console.log(x);
// setTimeout(fun, 1000);
// setTimeout(fun2, 500);
// console.log(x);
// function fun(){
//     x = 100;
//     console.log(x);
// }
// function fun2(){
//     x = 200;
//     console.log(x);
// }

// Q12
// var x = 10;
// console.log(x);
// setTimeout(fun, 1000);
// setInterval(fun2, 300);
// console.log(x);
// function fun(){
//     x = 100;
//     console.log(x);
// }
// function fun2(){
//     x = 200;
//     console.log(x);
// }

// Q13
// var x = 10;
// console.log(x);
// setTimeout(fun, 500);
// var intervalId = setInterval(fun2, 300);
// setTimeout(fun, 100);
// console.log(x);
// var i = 1;
// while(i<5){
//     console.log(x);
//     i++;
// }
// function fun(){
//     x = 100;
//     console.log(x);
// }
// var counter = 0;
// function fun2(){
//     counter++;
//     x = 200;
//     console.log(x);
//     if(counter==5){
//         clearInterval(intervalId);
//     }
// }

// Q14
// var x = 10;
// setTimeout(function(){x = 100; console.log(x);}, 1000);
// console.log(x);

// Q15
var x = 0;
console.log(x ? x ? "something" : "nothing" : "anything");

var x = 0;
if (x){
    if(x){
        console.log("something");
    }
    else {
        console.log("nothing");
    }
} else {
    console.log("anything");
}

// something

// w3school
// javascript.info





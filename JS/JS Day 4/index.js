// var arr = [11, 22, 30, 40];
//Given an array count the number which are divisible by 10

// var counter = 0;
// for (var i = 0; i<=3; i++){
//     if (arr[i]%10 == 0){
//         counter++;
//     }
// }
// console.log("Divisible by 10: "+ counter);

// for in
// var counter=0;
// for (k in arr){
//     if(arr[k]%10==0){
//         counter++;
//     }
// }
// //console.log("Divisible by 10: "+ counter);


// var user = {
//     name: "Dinesh",
//     address: "Delhi",
//     age: 10
// }

// for (key in user){
//     console.log(user[key]);
// }


// for of
// var arr = [11, 22, 30, 40];
// var counter=0;
// for (var k of arr){
//     if(k%10==0){
//         var l;
//         counter++;
//     }
// }
// console.log(counter);

// 
// [10, "Delhi", true, --, --, --, --, 60] -> null/undefined/NaN
// 0 1 2 3 4 5 6 7
// var arr = [10, "Delhi", true, "19"];

// arr[3] = parseInt(arr[3]);
// console.log(arr);
// arr[3] = arr[3].toString();
// console.log(arr);

// arr.push("70");
// console.log(arr);

// console.log(arr.length);
// // arr.pop();
// // console.log(arr);

// arr.splice(1, 0, "Jar", "false", "19"); //splice(<From where to delete>, <how many elements to delete>)
// console.log(arr);

// var arrIntValue = parseInt(arr[3]);
// console.log(arrIntValue);
// console.log(arr[3]);

// arr[3] = arr[3].toString();
// console.log(arr);


// var arr = [1, 2, 3, 4, 5];

// // Given an array, calculate the square of every number and store in new array
// // newArr = [1, 4 ,9, 16, 25]
// // var newArr = [];
// // for(var i=0; i<arr.length; i++){
// //     var num = arr[i]**2;
// //     newArr.push(num);
// // }
// // console.log(newArr);


// var square = function(item){
//     return item*item;
// }

// // callback function -> function which is passed as an argument/paramenter
// var latestArr = arr.map(square);
// console.log("square numbers are: "+latestArr);

// print all the cube of the arr items

// var cube = function(item){
//     return item**3;
// }
// var cubeArr = arr.map(cube);
// console.log("cube numbers are: "+ cubeArr);
//           //5  6  7  8  9
// var arr2 = [1, 2, 3, 4, 5];
// // print the new array with items by adding 5 to main arr
// // o/p -> [6, 7, 8, 9, 10]

// var plusFive = function(item, id, something){
//     //console.log(something);
//     return id+5;
// }
// var plusFiveArr = arr2.map(plusFive);
// console.log("plus five numbers are: "+ plusFiveArr);

var a = 10;
var b = "string";
var c = true;
var d;
var e = null;
var f = NaN;
var g = [10, 40, "Felgirg"];
var h = {

}

var some = function(a, b) {
    return a+b;
}

function mainFunction(c) { // c = callback
    console.log("a function is called");
    var sum = c(2, 5);
    console.log(sum);
}
mainFunction(some);


// function sum(a, b){
//     return a+b;
// }

// sum(2, 5);
// sum(10, 15);












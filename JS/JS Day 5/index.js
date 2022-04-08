// var arr = [1,2,3,4,5];

// var multiplication=1;
// i = 0, 1, 3, 4
// for(var i=0;i<arr.length;i++){
//     //multiplication = multiplication*arr[i];
//     if (i==2){
//         continue;
//     }
//     console.log(i);
// }
// console.log(multiplication);

// function multiplication(mult, item, idx, arr){
//     return mult*item;
// }

// var result = arr.reduce(multiplication, 1);
// console.log(result);

// Given an array [10, 20, 25, 34, 44] print all the even numbers

// for(var i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         console.log(arr[i]);
//     }  
// }

// function evenNumber(item, idx, arr){
//     return item%2==0;
// }

// var newArr = arr.filter(evenNumber);
// // 
// console.log(newArr);


// ES-5

// var user = {
//     fname: "something",
//     age: 10,
//     isGraduated: true,
//     languages: ["Hindi", "English"],
//     profile: {
//         about: "I am something"
//     },
//     greet: function(){
//         return "Hello";
//     }
// }

// console.log(user['greet']);


function User(fname){
    this.greet = function fn(){
        return "Helloooo!" + fname;
    }
}

var dinesh = new User("Dinesh");
var anjali = new User("Anjali");

console.log(dinesh.greet());
console.log(anjali.greet());
console.log(dinesh);


//console.log("Print something");

// Number
// BigInt -> 
// String
// boolean
// undefined
// null
// var a = 10;
// // console.log(a);
// var b = "alien";
// var c = false;
// var d;
// var e = null;

// // Object -> JSON - javascript object notation
// var info = 
// {
//     firstName: "Something",
//     age: 20,
//     address: "some string",
//     language: ["Hindi", "English"],
//     user: {
//         lastName: "LastName",
//         img: "image url",
//         aa: {
//             city: "Delhi"
//         }
//     }
// }
// //console.log(info.user.aa.city);


// // Array
// var arr = [10, 20, 30];
//console.log(arr);

// var b = Boolean(-123);
// console.log(b);

// var studentId = 1234;
// var studentName = "Student";
// var age = 20;


//console.log(!!studentId); // true
//console.log(!!studentName); // true

// console.log(!!studentId && !!studentName && age);

// console.log(!studentName || !studentId || !!age);


// var s1 = "Hello";
// var s2 = "World";

// // Hello World!!
// //console.log(s1 + " " + s2 + "!!");

// s1 += " "; //-> "Hello "  -> s1 = s1 + " ";
// s1 += s2; // Hello World
// s1 += "!!" // Hello World!!

// console.log(s1);


//Conditional statements

// var b1 = true;
// var b2 = false;
// var b3 = 1234;

// // if (b3)
// // {
// //     console.log("something");
// // }

// if(!(  !b1 || !b2   )){
//     console.log("inside if");
// } 
// else if (!(b1 || b2)){
//     console.log("inside else if");
// }
// else
// {
//     console.log("inside else");
// }

// Ternary operator

var t1 = 0;
var t2 = null;

var result = 
!!t1 ?
    "if true" 
: !!t2 ? 
    "else if true" 
: 
    "else";

console.log(result);

// I want to know if person with Name has some city information?
var t2 = "some";

if (t2) {

}
var obj = {
};

// if(obj && obj.info && obj.info.city)

console.log(obj.info && obj && obj.info.city);












// var a = 1;
// function b() {  
//     a = 10;  
//     return;
//     function a() {}
// }
// b();
// console.log(a);

// function foo(){    
//     function bar() {        
//         return 3;    
//     }    
//     return bar();    
//     function bar() 
//     {        
//         return 8;    
//     }
// }
// alert(foo());

// MA -> hoisted = ""I am a""
// function parent() {    
//     var hoisted = "I'm a variable";    
//     function hoisted() {        
//         return "I'm a function";    
//     }    
//     return hoisted(); 
// }
// console.log(parent());



// (function c(){
//     var a = 10;
//     function b(){
//         var d = 100;
//         function e(){
//             console.log(d);
//         }
//         e();
//     }
//     b();
// })();


// (function immediateA(a) {
//     return (function immediateB(b) {
//       console.log(a); // What is logged?
//     })(1);
// })(0);

// function A(){
//     var a = 0;
//     function B(){
//         var b = 1;
//         console.log(a);
//     }
//     B();
// }
// A();

// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//     }, 1000);
// }

// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i); // What is logged?
//     }, 1000);
// }


// Types of function
// 1. Function Declaration:

function nameOfFunction() {
    console.log("some function body");
}

// 2. Function Assignment:

let a = function() {
    console.log("some function body");
}

// 3. Arrow function (ES6):

var a = () => {
    console.log("some function body");
}

// Special cases of function

// Immediately Invoked function
(function a(){
    console.log("some function body");
})();

// Callback function
// There will be a trigger point when the function will be called
var pEle = document.getElementById('idofp');
var a = () => {
    console.log("some function body");
}

pEle.addEventListener('click', a)

// Anonymous function
pEle.addEventListener('click', function(){console.log('Anonymous function')});

// Asynchrounous Function
// Function which is taking some time to execute
setTimeout(
    ()=>{
    console.log("Before")
}, 2000)
console.log("after");






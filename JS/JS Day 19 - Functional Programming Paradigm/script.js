// Python, Java, C++, C#
// OOPS Principles:
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism


// Javascript
// Functional Programming Paradigm/ Principles

// 1. Pure Functions
// 2. Immutability
// 3. Functional Composition


// 1. Pure Functions:
//    a. Referential Transparency: - The function returns the same value for the same arguments
//        The function can not depend on any mutable(changeable) state.
//     b. SideEffect Free: - 

// function sum(n1, n2){ // PureFunction
//     let obj = {name: "thisName"}
//     obj.name = "somethinElse"
//     return n1+n2;
// }

// sum(2,3) -> 5
// sum(5,6) -> 11
// sum(2,3) -> 5

// const a = 10;
// function addA(n1){ // Pure Function
//     return n1+a;
// }

// addA(1) -> 11
// addA(5) -> 15

// a = 20;
// addA(1) -> 11


// 2. Immutability - 
//    If there is a possibility of Immutability then you should apply that.

// const height = 10; // Immutable Variable

// function fun(n1){
//     return n1-height;
// }

// // Immutable Object
// const obj = Object.freeze({name: "SomeValue", age: 20});
// // Immutable Array
// const arr = Object.freeze([1,2,3]);


// 3. Functional Composition

// // (f o g)(x) = f(g(x))
// function AddTwo(a){
//     return a + 2;
// }
// function cube(a){
//     return a*a*a;
// }
// function print(a){
//     console.log(a);
// }
// print(cube(addTwo(0)));

// const myComposition = R.compose(print, cube, AddTwo);
// myComposition(0);


sum(2,3) -> 5

function random(){
    for(let i=0; i<1000000000; i++){ // 10ms
        var x = 10;
        y = x+i;
    }
    return 0;
}
// Easy to debug - 
// Easy to write test cases
// This is faster
// The return values can be cached or "Memoized" to avoid the recomputing.



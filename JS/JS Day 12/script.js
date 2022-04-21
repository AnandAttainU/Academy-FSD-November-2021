// template strings
// string methods

// let firstName = "Mahendra";
// let lastName = "Dhoni";

// console.log(`${firstName} Singh ${lastName}`);

// var htmlTag = `
//     <div>   
//         <div>
//             <h1>
                
//             </h1>
//         </div>
//     </div>`;
// console.log(htmlTag);

// let str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nesciunt dolore enim ipsam debitis ratione voluptatibus provident soluta libero ab rem qui nostrum mollitia sapiente omnis, doloribus beatae dicta eius.";

// IIFE - Immediately invoked/called function expressions

// function statement
// function sum(n1, n2){
//     console.log(n1+n2);
// }

// // function expression
// const sum = function(n1, n2){
//     console.log(n1+n2);
// }

// var res = function (n1, n2){
//     return n1+n2;
// }(3, 4);
// console.log(res);

// Arrow functions
// ES 6

// const sum = function(n1, n2){
//     let res = n1+n2+10;
//      return res;
// }
// sum(2,6);

// const sum = p => p+10;
// console.log(sum(20));

// if(false) 
//     console.log("something");
//     console.log("more");

// if(false){
//     console.log("something");
//     console.log("more");
// }


// let fun = e => e+1;
// var f2 = function(){
//     return fun(11);
// }
// console.log(f2());


// const btnEle = document.addEventListener('click', () => console.log("something"));


// cons of arrow functions

// Arrow function does not have its own binding to this/super
// Arrow function can't be used to create Constructors
// Arrow function should not be used with call/apply methods
// yield 


var product = {
    name: "product1",
    category: {
        categ1: "asdf",
        categ2: ";elkjrt"
    },
    price: 1000,

    description: () => console.log(this)
}

console.log(product && product.category && product.category.categ2);

// var product2 = {
//     name: "product2",
//     category: "electronics",
//     price: 10000
// }
// product.description.call(product2);


// var Person = function(name, age, address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
// }


console.log("hello" || "world");
// console.log(0 || 0);




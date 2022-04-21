// this
// call() and apply()

// let & const -> ES 6

// Date object

// IIFE - Immediately invoked function expressions



// console.log(this);

// function fun(){
//     var a = 10;
//     console.log(this);
// }
// fun();
// window.fun();

// var obj = {
//     name: "myName",
//     age: 10,
//     address: "something",
//     getName: function(){
//         var name = "anotherName";
//         console.log(this.name);
//     }
// }

// obj.getName();

// var description = function(info, b, c){
//     console.log(this.name + " " + this.price + " " + this.category + " " + info + b + c);
// }

// var product1 = {
//     name: "product1",
//     category: "clothing",
//     price: 1000
// }

// var product2 = {
//     name: "product2",
//     category: "mobile",
//     price: 10000
// }

// description.call(product1, "dfgasdfasdf" , 1111, false);
// description.call(product2, "weriwqermwnre", 0, true);
// console.log(product2.category);


// function Person(name, age, address){
//     this.name = name;
//     this.age = age;
//     this.address = address;
// }

// function Employee(name, age, address, salary){
//     Person.call(this, name, age, address);
//     this.salary = salary;
    
//     // this.name = name;
//     // this.age = age;
//     // this.address = address;
// }

// var obj1 = {};

// Person.apply(obj1, ["n1", 20, "sdfas"]);
// console.log(obj1);



// let & const
// hoisting will happen -> Memory allocation happens in script scope
// Script scope memory is only accessible after initialization
// let and const follows block scope
// declaring the variables with same name not possible with let and const
// const keyword is used to create CONSTANTs 

// {
//     // let a = "name1";
//     // console.log(a);
//     // a = "nam2";
//     // console.log(a);
// }
// {
//     const a = 10;
// a = "something";
// }
// const a = 100;
// console.log(a);

// const a = 10;
// console.log(a);

// const arr = [1,2,3];
// arr[0] = 23;
// console.log(arr);

// const obj = {
//     name: "sdf",
//     age: 10,
//     address: "asdjasfasdf"
// }

// obj.age = 20;
// console.log(obj);

// const a = 10;
// a -= 10;
// console.log(a);





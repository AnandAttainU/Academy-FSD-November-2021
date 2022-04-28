// ES-6 Modules

// named export and import
// default export and importing the default export
// exporting multiple objects together
// renaming the import


// import { Cart } from "./cart.js";
import { Product, someVar as otherName, Payment } from "./product.js";
import Cart2 from "./cart.js";
import {someItem} from "./cart.js";


let someVar = 300;
let cart = new Cart2();
let item = new Product("iPhone", 80000);

console.log(otherName);
cart.addItem(item);
// console.log(cart);





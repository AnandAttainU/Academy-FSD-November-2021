// Destructuring
// Classes ES6, getter, setter
// prototype inheritance

// const arr = ['Sufiyan', 20, true, ];

// function getData(arr){
//     // const firstName = arr[0];
//     // const age = arr[1];
//     // const isGraduated = arr[2];

//     const [firstName, age, isGraduated] = arr; // Destructuring
//     console.log(`firstName: ${firstName} isGraduated: ${isGraduated}`);
// }

// getData(arr);

let product = {
    name: 'p1',
    category: 'clothing',
    price: 1000
}

// function printDetails(product){
//     const {price, name} = product;
//     return (`Name: ${name} Price: ${price}`);
// }

// console.log(printDetails(product));



// __proto__ and prototype
// prototypical inheritance
// var arr = [1,2,3];
// var arr2 = new Array(3);

// function CustomClass(name, value) {
//     this.name = name;
//     this.value = value;
//     var details = function (){
//         console.log("details printed");
//     }
// }

// var obj = new CustomClass("SomeName", "someValue");


// ES 6 class
// syntactical sugar

// class Person{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }

//     getDetails() {
//         console.log(this.name + this.age);
//     }
// }

// let p1 = new Person("someOne", 20);


// Inheritance

class Rectangle {
    constructor(l, b){
        this._length = l;
        this._breadth = b;
    }
    getArea() {
        return this.length * this.breadth;
    }

    get length(){
        console.log("Getter called");
        return this._length;
    }

    set length(newVal){
        console.log("setter called");
        this._length = newVal;
    }
}

class Square extends Rectangle {
    constructor(s){
        super(s, s);
        this.side = s;
    }
}

var r1 = new Rectangle(5, 4);
console.log(r1.getArea());
var s1 = new Square(4);
console.log(s1.getArea());


// var a;
// function print(){
//     // var a = 10;
//     console.log(a);
// }

// print();

// console.log(studentName);

// var studentName = "Dinesh";

// print();

// function print(){
//     console.log("something");
// }

// // Before code execution:

// var studentName;
// function print(){
//     console.log("something");

// }
// console.log(studentName);
// print();


// var sum = add(1, 2);

// function add(arg1, arg2){

//     doSomething();
//     console.log(firstName); // undefined

//     var firstName = "something";
    
//     function doSomething(){
//         console.log("inside do something");
//     }
//     return arg1+arg2;
// }

// doSomething();

// var a = 1;

// function b() {
//     console.log(a);
//     a = 10;
//     return;
//     function a(){
//         console.log(a);
//         var a = 20;
//         console.log("something");
//     }
// }

// b();
// console.log(a);

var cart = function initCart(){
    var totalAmount = 0;

    function addItem(amount){
        totalAmount += amount;
    }

    function removeItem(amount){
        totalAmount -= amount;
    }

    function getAmount(){
        return totalAmount;
    }

    return {
        addItemKey: addItem,
        removeItemKey: removeItem,
        getAmountKey: getAmount
    };
}();

// var cartObj = initCart();
// cartObj.addItemKey(100);
// console.log(cartObj.getAmountKey());


// Closure
// function initCart(){
//     var totalAmount = 0;
//     function addAmount(amount){
//         totalAmount+=amount;
//         var xyz = "sdafhjasdf";
//         console.log(doSomething);
//         doSomething();
//         function doSomething(){
//             var sdf = "sdfasd" + xyz;
//             console.log(totalAmount);
//         }
//         return doSomething;
//     }    
//     addAmount(100);
// }
// initCart();







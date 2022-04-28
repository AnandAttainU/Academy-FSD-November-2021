// Iterators and Generators

const arr = [2,3,5,67,8];
const st = "Hello World";
const obj = {
    name: "someName",
    age: 20,
    [Symbol.iterator]: function(){
        let count = 0;
        return {
            next: function(){
                count++;
                switch (count) {
                    case 1:
                        return {
                            done: false,
                            value: obj.name
                        }
                    case 2:
                        return {
                            done: false,
                            value: obj.age
                        }
                    default:
                        return {
                            done: true,
                            value: undefined
                        }
                }
                
            }
        };
    }
}

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
// }

// for (let i in obj) { // i will be key from the object
//     console.log(obj[i])
// }

// for (var i of obj) {
//     console.log(i); // someName 20
// }


// generator - 
// Generating an iterator and returns that
function* genFunction() {
    var count = 1;
    while(true){
        if(count==10) return;
        yield count;
        count ++;
    }
}

const it = genFunction();
for (i of it){
    console.log(i);
}


// function genFunction() {
//     var count = 1;
//     while(true){
//         return count;
//         count ++;
//     }
// }






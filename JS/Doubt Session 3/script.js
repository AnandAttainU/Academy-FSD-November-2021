// var arr1 = [1, 2, 3, 4];
// var arr2 = [1, 2, 3, 4];

// let flag = true;
// if(arr1.length !== arr2.length) {
//     flag = false;
//     console.log(false);
// }
// for(i =0; i<arr1.length; i++){
//     if(arr1[i] !== arr2[i]){
//         console.log(false);
//         flag = false;
//         break;
//     }
// }
// if(flag) console.log(true);


let obj1 = {
    a: 1,
    b: {
        c: 12,
        d: {
            e: 10
        }
    }
}
let obj2 = {
    a: 1,
    b: {
        c: 12,
        d: {
            e: 10
        }
    }
};

function objectCompare(obj1, obj2){
    let flag = true;
    let obj1Arr = Object.entries(obj1);
    //      [
        //     [a, 1],
    //         [b, {c:2}]
    //      ]

    // [
    //       [a, 1],
    //       [b, {c:2}]
    // ]
    let obj2Arr = Object.entries(obj2);
    if(obj1Arr.length !== obj2Arr.length){
        flag = false;
    }

    for(i=0; i<obj1Arr.length; i++){
        // Checking all the keys
        if(obj1Arr[i][0] !== obj2Arr[i][0]) {
            flag = false;
            break;
        }
        // Checking the values
        if(typeof obj1Arr[i][1] !== typeof obj2Arr[i][1]){
            flag = false;
            break;
        }
        if(typeof obj1Arr[i][1] === 'object'){
            return objectCompare(obj1Arr[i][1], obj2Arr[i][1]);
        }
        if(obj1Arr[i][1] !== obj2Arr[i][1]) {
            flag = false;
            break;
        }
    }
    return flag;
}

console.log(objectCompare(obj1, obj2));


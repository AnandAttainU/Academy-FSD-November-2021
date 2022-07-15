function isEven(num){
    if(typeof num !== "number") throw new Error("Invalid input");
    if(num%1 !== 0){
        errObj = new Error("Decimal number not accepted");
        throw errObj;
    }
    return num%2 === 0;
}

function add(a,b){
    return a+b;
}

module.exports = {
    isEven,
    add
}
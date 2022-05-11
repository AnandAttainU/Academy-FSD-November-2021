function print(someString){
    console.log(someString);
}

function add(a, b){
    console.log(a+b);
}

// CommonJS Modules

module.exports = {
    sum: add, 
    output: print
};


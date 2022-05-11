const fs = require('fs');

// console.log("Before file reading");
// const data = fs.readFileSync('./readFile.txt', {encoding: 'utf-8'});
// console.log(data);
// console.log("After file reading");

// console.log("Before file reading");
// fs.readFile('./readFiles.txt', {encoding: 'utf-8'}, (err, data)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(data);
//     }
// });
// console.log("After file reading");
const data = "sample data12123asdfsadf";
const data2 = "\t This is new data";
console.log("Before");
fs.writeFile('./writeFile.txt', data, {flag: 'a'}, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Nodemon is working");
    }
});
console.log("After");

// fs.appendFileSync('./writeFile.txt', data2);

fs.unlink('./writereFile.txt', (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Delete is successful");
    }
})

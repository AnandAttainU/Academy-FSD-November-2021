// var age = 10;

// if (age > 18) {
//     console.log("Eligible for license");
// }
// else {
//     console.log("Not eligible");
// }

// var canGetDL = 
//     age > 18 ? 
//         console.log("Eligible for license") 
//     : 
//         console.log("Not eligible");

// Switch case/statement
// if (status == "success") {
//     return "green";
// }
// else if (status == "warning"){
//     return "yellow";
// }
// else if (status == "error"){
//     return "red";
// }
// else {
//     return "grey";
// }

// var status = "error";

// switch (status) {
//     case "no error":
//     case "success":
//         console.log("green");
//         break;
//     case "warning":
//         console.log("yellow");
//         break;
//     case "error":
//         console.log("red");
//         break;
//     default:
//         console.log("grey");
//         break;
// }

// success -> green
// warninng -> yellow
// error -> red
//  -> grey


// Get the number of people who are eligible for DL?
// Get the number of people who are not eligible as well?
// var ages = [10, 20, 30, 40, 5, 13, 18];

// var numberOfPeople=0;
// var numberOfPeopleNotEligible=0;
// // while, do..while, for

// var i = 0;
// while (i < 7) {
//     if (ages[i] >= 18){
//         numberOfPeople++;
//     }
//     else {
//         numberOfPeopleNotEligible++;
//     }
//     i++;
// }
// console.log("Number of people eligible: " + numberOfPeople);
// console.log("Number of people not eligible: " + numberOfPeopleNotEligible);

// Do..while

// Get the number of people who are eligible for DL?
// Get the number of people who are not eligible as well?
// var ages = [10, 20, 30, 40, 5, 13, 18];

// var i = 0;
// var numberOfPeople = 0;
// var numberOfPeopleNotEligible=0;
// do {
//     // Execute the block without any condition for first time
//     // Second time execute, if the while condition is true
//     if (ages[i] > 17){
//         numberOfPeople++;
//     }
//     else {
//         numberOfPeopleNotEligible++;
//     }
//     i++;
// } while (i < 7);


// console.log("Eligible: "+ numberOfPeople);
// console.log("Not eligible: "+numberOfPeopleNotEligible);

// Get the number of people who are eligible for DL?
// Get the number of people who are not eligible as well?
var ages = [10, 20, 30, 40, 5, 13, 18];

var numberOfPeople = 0;
var numberOfPeopleNotEligible=0;
// 1. initialization
// 2. Condition
// 3. increment/decrement

// Execution flow:
// First initializxation happens
// 2. condition will be checked
// 3. if condition is true -> block will be executed
// 4. increment
// condition
// block
// 
// for(var i=0; i<7; i++){
    
//     if(ages[i]>17){
//         numberOfPeople++;
//     }
//     else{
//         numberOfPeopleNotEligible++;
//     }
// }

// console.log("Eligible: "+ numberOfPeople);
// console.log("Not eligible: "+numberOfPeopleNotEligible);


// *
// **
// ***
// ****

for (var i=0; i< 4;i++){
    var str = "";
    for(var j=0;j<i+1;j++){
        str+="*";
    }
    console.log(str);
}

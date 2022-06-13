// 1. Ask a number input from the user, and display a 
// message whether that number is
// prime or not.
// Ex: 1 is not a prime number | 17 is a prime number

// Read this 2 times

// Now, tell me how you will solve this.

// we will take function
function isPrime(num){
    if (num === 1){
        return false;// It is given that 1 is not a prime number
    } 
    for(let i=num-1; i>1; i--){
        if(num%i === 0){// If it is divisible, means not a prime number
            return false; // that is why false
            // yes it will come outside at the same time.
            // Because of the return keyword
            // yes
        }
    }
    return true;
}
let num = prompt("Check for prime number");
if(isPrime(num)){
    console.log("Number is a prime number");
}else {
    console.log("Number is not a prime number")
}

// Any doubt?

// Is this function correct, any changes required?
// Did you understand the code written?


// Let's move to next question.

//2. Ask a string input from the user, and display a message 
//if the string entered is
//palindrome or not.
//Ex: “aibohphobia” when reversed is still “aibohphobia”

// Everyone understood some or the other approach to solve this?
function isPalindrome(str){
    let revStr = [...str].reverse().join("");
    if(revStr === str){
        return true;
    }
    else{
        return false;
    }
}

let inputStr = prompt("Give the string to check for palindrome");
if(isPalindrome(inputStr)){
    console.log("The string is Palindrome");
}else {
    console.log("Given string is not Palindrome");
}

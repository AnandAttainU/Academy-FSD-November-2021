// Class

// class Student {
//     // variables
//     // methods
//     var name;
//     var age;
//     function Student(nam, agge){
//         this.name = nam;
//         this.age = agge;
//     }

//     function eligibleForDL(){
//         if (age>17){
//             return true;
//         }
//         return false;
//     }
// }

// var aquib = new Student("Aquib", 20);

// 1. You can create object of the class using new keyword
// 2. You can pass different parameters to create new objects
// 3. It combines methods and data for the class


// ES5

// function Student(fname, age, marks){
//     this.isEligible = function(){
//         if (age>17){
//             return true;
//         }
//         return false;
//     };
//     var grade = "";

//     this.getGrade = function(){
//         if(marks>70 && marks<80){
//             return "B";
//         }
//         else if(marks>80){
//             return "A";
//         }
//         return "C";
//     };
// }

// var dinesh = new Student("Dinesh", 19, 85);
// var aquib = new Student("Aquib", 19, 95);
// console.log(dinesh.isEligible());
// console.log(dinesh.getGrade());



// Array of objects

var students = [
    {
        name: "Dinesh",
        marks: 80,
        isGraduated: true
    },
    {
        name: "Praveen",
        marks: 90,
        isGraduated: true
    },
    {
        name: "Karthik",
        marks: 100,
        isGraduated: false
    }
]

// var arr = [1, 2, 3, 4, 5]
// // Print the odd numbers only

// for(var i=0; i<arr.length; i++){
//     if(arr[i]%2!=0){
//         console.log(arr[i]);
//     }
// }
// I want to print the students who are graduated?

for(var i=0; i<students.length; i++){
    if(students[i].isGraduated == true){
        console.log(students[i].name);
    }
}

console.log(
    students.filter(
        function(item){
            return item.isGraduated==true;
        }
    )
);


// Print all the students name in capital letter
// console.log("something".toUpperCase());

// console.log(
//     students.map(
//         function(item){
//             return item.name.toUpperCase();
//         }
//     )
// );





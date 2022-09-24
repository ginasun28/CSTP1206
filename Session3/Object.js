// Objects

let student = {
    name: "Harinder",
    college : "VCC",
    age: 20,
    hobbies: ["Drinking Water", "Studying"],
    address: {
        city: "Surrey",
        province: "BC"
    }, 
    study: function() {
        console.log("Harinder likes to study Networks");
    }
}

// Methods inside of console object
// console.log();
// console.error();
// console.table();

// Map
// They are also key value pair and they are inherited from the object
// Because when they were made iterable
// The keys inside a map, can also be an object
// Maps they keys are organized

// Map class
let map = new Map();


console.log(student.name); // Accessing properties by data 
console.log(student['college']); // VCC


// Difference
var obj = { "abc" : "hello"}
var x = "abc";
obj.x // undefined
obj[x] // "hello"

// adding key value pairs in object
obj.name = "Prabh";

// Deleting a key form an object
console.log(obj);

delete obj.name;
console.log(obj);

// running loops on object
//
for (let key in student) // same as for each loop
{
    console.log(key); // keys inside object

    console.log(student.key); // undefinded because it doesn't exist 
    console.log(student[key]); // Values inside those key

}
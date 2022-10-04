// Deep Copy
// When we change the references while creating a copy

let obj1 = {b:4 }
let obj2 = JSON.stringify(obj1);

obj1.b = 2;
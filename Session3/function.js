

const division = (a, b) => {
    return a / b;
}



// With Arrow functions we cannot do hoisting
// This is also function expression and it will also not hoist
const divide = function() {
    return 10 / 5;
}
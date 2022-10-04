function greet() {
    console.log("Hello Gina");
}

// CallBacks - Call me back whenever

function sayHi(callback) {
    callback();
}

sayHi(greet);


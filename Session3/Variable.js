// Var

function sum() {
    var a = 10;

    if (true) {
        var b = 11;
        let c = 10;
    }
    console.log(a); // 10
    console.log(b); // 11
    console.log(c); // error
}

sum();
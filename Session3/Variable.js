// Var

// function sum() {
//     var a;
//     // var b; // Declaration
//     a = 10;
//     // var a = 10;

//     console.log(b, "Value of b")

//     if (true) {
//         var b = 11;
//         // b =11; // Assignment/Call
//         let c = 10; // died within the block
//         const d = 20; //died within the block
//     }
//     console.log(a); // 10
//     console.log(b); // 11
//     console.log(c); // Error --> Referential Error
//     console.log(d); // Error --> Referential Error
// }

// sum();

function random() {
    let a = 5;
    if(true) {
        let a = 10;
        console.log(a);

        if (true) {
            let a = 12;
            console.log(a, "Inside");
        }
    }
    console.log(a, "Outside");

}

random();
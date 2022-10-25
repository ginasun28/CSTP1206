/// Assignment4

// Question1
// Write a function for that takes above array as a parameter and function to calculate the total of
// the marks of each student, and returns the student with the highest marks.
// Note: If you want you can add values to the objects of these array.

let student = [
    {
    name: "Daniel",
    email: "daniel@gmail.com",
    marks: [80, 60, 50, 70, 95]
    },
    {
    name: "Mark",
    email: "mark@gmail.com",
    marks: [99, 40, 84, 72, 60]
    },
    {
    name: "Stacy",
    email: "stacy@gmail.com",
    marks: [8, 30, 11, 0, 20]
    },
    {
    name: "Geri",
    email: "geri@gmail.com",
    marks: [100, 99, 95, 85, 99]
    }
    ];

function studentWithHighestMarks(array){
    for (let i = 0; i < array.length; i++)
    {   
        // Add up all element values, and finally return the result
        var total = array[i].marks.reduce((mark, next) => mark + next);
        console.log(`${array[i].name}'s sum of mark: ${total}`);
    }
    // if student 1 is higher than student 2 retrun s1, if not return s2
    var max = array.reduce((s1, s2) => ( (s1 > s2) ? s1 : s2));
    return max;
}
// stu = max
stu = studentWithHighestMarks(student);
let str = '';
console.log("The highest mark of student: ");
console.log("total for highest student: " + stu.marks.reduce((mark, next) => mark + next) );
for (var obj in stu)
    {
        if (stu.hasOwnProperty(obj)) {
            str += obj + ': ' + stu[obj] + '\n';
        }
    }
console.info(str);


// function studentWithHighestMarks2(array) {
//     var highestMark = Number.MIN_VALUE;
//     for(var i = 0; i < array.length; i++)
//     {
//         if (array[i].obj > highestMark) {
//             highestMark = array[i].obj;
//         }
//     }
//     console.log(highestMark);
// }
// studentWithHighestMarks2(student);



// Question2
// Write a function to find the missing number in the array whose value ranges from 0 —> n,
// Example 1
// Let array = [ 4, 5, 2, 1, 0 ] , Here the missing number is 3, so you have to find it
// Example 2
// Let array = [2, 1, 0, 3, 7, 6,4, 5, 10, 9] , Here the missing number is 8, so you have to find it.

let array = [ 4, 5, 2, 1, 0 ];
let array2 = [2, 1, 0, 3, 7, 6, 4, 5, 10, 9];

function missingNumber(array, n) {
    let missingNum = [];
    for(let ele in array)
    {
        if (array.indexOf(ele) == -1)
        {
            missingNum.push(ele);
        }
    }
    return missingNum;
}
console.log(missingNumber(array, 5));
console.log(missingNumber(array2, 10));

// function missingNumber(array, n) {
//     let missingNum = [];
//     for(i = 0; i <= n; i++)
//     {
//         if (!array.includes(i))
//         {
//             missingNum.push(i);
//         }
//     }
//     return missingNum;
// }
// console.log(missingNumber(array, 5));
// console.log(missingNumber(array2, 10));

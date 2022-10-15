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

    function studentWithHighestMarks(array) {
        const max = array.reduce((prev, current)=> ( (prev.y > current.y) ? prev : current),0)
        console.log(max);
    }
    studentWithHighestMarks(student);
    
    
    function studentWithHighestMarks2(array) {
        var highestMark = Number.MIN_VALUE;
        for(var i = 0; i < array.length; i++)
        {
            if (array[i].obj > highestMark) {
                highestMark = array[i].obj;
            }
        }
        console.log(highestMark);
    }
    studentWithHighestMarks(student);

// Question2
// Write a function to find the missing number in the array whose value ranges from 0 —> n,
// Example 1
// Let array = [ 4, 5, 2, 1, 0 ] , Here the missing number is 3, so you have to find it
// Example 2
// Let array = [2, 1, 0, 3, 7, 6,4, 5, 10, 9] , Here the missing number is 8, so you have to find it.


function missingNumber(array, n) {

}


// Question3
// Write a Express server where you will keep records of Employees
// Write get and post api’s for getting all the employees and adding employee to the list
//The object of Employee should look like
// {
//      “Name” : “Daniel”,
//      “employeeId”: 100,
//      “Email” : “daniel@gmail.com”,
//      “Department” :”IT”
// }



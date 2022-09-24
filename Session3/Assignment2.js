// 1. Write a function to find the sum of the elements inside the array

function sum()
{
    console.log("Question 1:")
    var numArr = [2,4,6,8];
    var total = 0;

    for(var num = 0; num < numArr.length; num++)
    {
        total += numArr[num];
    }
    console.log(total); // 20
}

sum(); 

// 2. Using a function for loop print all even numbers up to n (parameter in function);

function printEvenNum(num)
{
    console.log("Question 2:")
    while(num <= 20){
	    if(num%2 === 0){
			console.log(num);
		};
	    num ++;
    };
}

printEvenNum(10)

// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
    // For example - "Crayzy" "Yes"
    
function checkLetter(str = "Crayzy")
{
    if (str.toLowerCase().includes("y"))
    {
        console.log(`"${str}" "Yes"`);
    }
    else
    {
        console.log("No");
    }
}

checkLetter();

// 4. Write a function to find the factorial of a given number n

function factorialize(num) {
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    return num;
  }
  factorialize(5);


// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

// 6. Write a function which prints the star pattern like that for the given value n

// *
// 
// *
// 
// *
// **
// **

// 7.

//
// 
// *
// 
// *
// **
// **
// **
// **
// **
// *
// **
// *

// 8. Write a function to reverse a string
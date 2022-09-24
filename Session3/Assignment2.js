// 1. Write a function to find the sum of the elements inside the array

console.log("Question 1:");

function findSum()
{
    var numArr = [2,4,6,8];
    var total = 0;
    numArr.forEach(sum);
    function sum(num)
    {
        total += num;
    }
    // for(var num = 0; num < numArr.length; num++)
    // {
    //     total += numArr[num];
    // }
    console.log(total); // 20
}

findSum(); 

// 2. Using a function for loop print all even numbers up to n (parameter in function);

console.log("Question 2:");
function printEvenNum(num)
{
    while(num <= 20){
	    if(num%2 === 0){
			console.log(num);
		};
	    num ++;
    }
    console.log("\n");
}

printEvenNum(10)

// 3. Write a function take a string as a parameter, Check if a string contains the letter “y”. If yes print "YES" and only one time.
    // For example - "Crayzy" "Yes"

console.log("Question 3:");
function checkLetter(str = "")
{
    
    if (str.toLowerCase().includes("y"))
    {
        console.log(`"${str}" "Yes"\n`);
    }
    else
    {
        console.log(`"${str}" "No"\n`);
    }
}

checkLetter("Crayzy");
checkLetter("Coffee");

// 4. Write a function to find the factorial of a given number n

console.log("Question 4: ");
function factorialize(num) 
{
    if (num === 0 || num === 1)
      return 1;
    for (var i = num - 1; i >= 1; i--) {
      num *= i;
    }
    console.log(`The factorial is ${num}\n`);
}
  
factorialize(5);
factorialize(4);

// 5. // Write a function which accepts 4 parameters (different scores of a student for subjects), and
// then calculate the average of all the score.
// If the average is more than 90 , then console grade A
// If the average is between 70 and 90 , then console grade B
// If the average is between 50-70, then console grade C
// Other wise console grade F

console.log("Question 5: \n")
function grade(math, python, english, history)
{
    var total = math + python + english + history;
    var avg = total / 4;
    console.log(`Math: ${math}, Programming: ${python}, English: ${english}, History: ${history}`);
    console.log(`The average of 4 scores : ${avg}`);
    // more than 90
    if (avg > 90)
    {
        console.log("Grade A\n");
    }
    // between 70 and 90
    else if (avg <= 90 && avg > 70)
    {
        console.log("Grade B\n");
    }
    // between 50 and 70
    else if (avg <=70 && avg > 51)
    {
        console.log("Grade C\n");
    }
    else
    {
        console.log("Grade F\n");
    }

}

grade(60, 80, 75, 65); // Grade C
grade(90, 80, 75, 98); // Grade B
grade(95, 100, 95, 98); // Grade A
grade(40, 50, 51, 53); // Grade F

// 6. Write a function which prints the star pattern like that for the given value n

// *
// **
// ***
// ****
// *****
// ******
// *******

console.log("Question 6: ");
function starPattern(n)
{
    var star = "";
    for (var i = 1; i <= n; i++) // loop row
    {
        for (var j = 0; j < i; j++) // loop star
        {
            star += "*"; // add star
        }
        star += "\n"; // add row
    }
    console.log(star);
      
}

starPattern(7);

// 7.

// *
// **
// ***
// ****
// *****
// ******
// *******
// ******
// *****
// ****
// ***
// **
// *

console.log("Question 7:\n");
function starPattern2(n)
{
    var star = "";
    // star pattern
    for (var i = 1; i <= n; i++) // loo row
    {
        for (var j = 0; j < i; j++) // loop star
        {
            star += "*"; // add star
        }
        star += "\n"; // add row
    }
    // reverse star pattern
    for (let i = 0; i < n + 1; i++) // loop row
    {
        for (let k = 0; k < n - i; k++) // loop star
        {
          star += "*"; // add star
        }
        star += "\n"; // add row
    }
    console.log(star);
      
}

starPattern2(7);

// 8. Write a function to reverse a string

console.log("Question 8: ");
function reverseString(string) 
{
    var word = string.split(""); // separate string of letter into array
    var reverseArr = word.reverse(); // reverse string 
    var newArray = reverseArr.join(""); // store string to new array
    
    console.log(`${newArray}\n`); // lecxe
}
 
reverseString("excel");
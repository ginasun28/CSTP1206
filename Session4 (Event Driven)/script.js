// event-driven programming
// click me (button)
// when click button will some interesting thing has occurred
// event is from function onClick()

// Event listener
// how to access an element in Html form js?

// Way1: capture that button element
const button = document.getElementById("click"); // id is html element
console.log(button);

// The DOM (document object model) [it is html note]
// a tree of node objects corresponding to the HTML elements on a page.
// can examinem, edit, add element

// way 2 Capture the button element using the tag
const button2 = document.getElementsByTagName("button");
console.log(button2);

// way 3 Query selector gets the first element which is
const button3 = document.querySelector("#click"); // html element  is id
console.log(button3);
// way 4 
const button4 = document.querySelector(".btn"); // html element is class
console.log(button4);

// Query selecter all gets all the elements which match this class
const button5 = document.querySelectorAll(".btn"); // html element is class
console.log(button5, "All");

// adding event listeners
// event handler and listener for button6
           // event is click  (need use id) 
// button3.addEventListener("click", function(){ // the action is behind html element
//     console.log("Fired");
// } );

// capture container element
const container = document.querySelector(".container")
console.log(container);

// event handler and lister for container element
container.addEventListener("mouseenter", () => {
    console.log("Mouse Enter");
});

container.addEventListener("mouseleave", () => {
    console.log("Mouse Left");
});

function mouseLeft()
{
    console.log("Mouse Left");
}

container.addEventListener("mouseleave", mouseLeft);

// capture img element
const image = document.querySelector('img');

//

// button3.addEventListener("click", function(){ // the action is behind html element
//     image.src = "https://excitedcats.com/wp-content/uploads/2020/10/British-Shorthair-pedigreed-kitten-with-blue-gray-fur_PHOTOCREO-Michal-Bednarek_shutterstock.jpg";

// } );


let toggleMe = true;
const orignalImage = image.src;
let newImage = "https://excitedcats.com/wp-content/uploads/2020/10/British-Shorthair-pedigreed-kitten-with-blue-gray-fur_PHOTOCREO-Michal-Bednarek_shutterstock.jpg";

button3.addEventListener("click", function(){ 
    if (toggleMe)
    {
        image.src = newImage;
        toggleMe = false;
    }
    else{
        image.src = orignalImage;
        toggleMe = true;
    }
} );

// adding classes dynamically
const changeColorButton = document.querySelector("#change");
const displaynone = document.querySelector("displayNone");
changeColorButton.addEventListener("click", () => {
    container.classList.add("green");
});

displaynone.addEventListener("click", () => {
    container.classList.remove("green");

});



// using innerHtml to add html elements
const table = document.querySelector("#myTable");
table.innerHTML = `<tr><th>Name</th><th>Email</th></tr>"
<tr>
    <td>Gina</td>
    <td>ginasun28@gmail.com</td>
</tr>`;

// adding text using textcontent
const paragraph = document.querySelector("p");
paragraph.textContent = "Hello this is Gina"; 

// ******************
// creating table elements using JS
const newTable = document.createElement("table"); // table tag : <table></table>
console.log(table);

// const th = document.createElement("th"); // table header


// create a new table
let tableRowLength = 5;
let tableDataLenght = 4;
for (let i = 0; i < tableRowLength; i++)
{
    const tr = document.createElement("tr"); // table row
    console.log("called");
    for (let j = 0; j < tableDataLenght; j++)
    {
        const td = document.createElement("td"); // table data
        td.textContent = "Data " + j;
        tr.appendChild(td);
    }
    newTable.appendChild(tr);

}
const newTableContainer = document.querySelector("#newTableContainer");
newTableContainer.appendChild(newTable);
console.log(newTable);

function greeting() {
    alert("Hello")
}

    
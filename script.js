/*
PSEUDO CODE
create 16x16 div workspace
- flexbox to organize the grid
- css reset borders and margins
- change div background color on hover

add prompt for user to input # of squares
- should replace the 16x16 square
- should respect 960px max width
- limit input to 100 max

extra credit
- randomize square color rgb value
- incrementally darken square by 10% on each interaction

*/

// VARIABLES
const container = document.querySelector("#container");
const button = document.querySelector("#userPrompt");
let maxWidth = 960;
let cellNum;
let cellWidth;

// USER PROMPT

button.addEventListener("click", () => {
  let userInput = prompt("Pick a number of squares");

  //Checks input is number
  if (Number(userInput) && (userInput <= 100)) {
    cellNum = Math.floor(userInput);
    cellWidth = Math.floor(maxWidth / userInput);
    console.log("formatted user input: " + cellNum);
    console.log("width per cell: " + cellWidth);    
  } else {
    alert("That's not a number.");
  }

  addDivs();
})


// CREATES DIVS IN CONTAINER
function addDivs() {
  for (i = 0; i < 17; i++) {
    const newDiv = document.createElement("div");
    let formatWidth = cellWidth + "px";
    newDiv.style.width = formatWidth;
    newDiv.style.height = formatWidth;
    newDiv.style.display = "block";

    if (i % 2 === 0) {
      newDiv.classList.add("even");
    } else {
      newDiv.classList.add("odd");
    };
    container.appendChild(newDiv);
  } 
}
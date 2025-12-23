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
const container = document.querySelector("#div-container");
const button = document.querySelector("#userPrompt");
const divs = document.querySelectorAll(".div-item");
let maxWidth = 960;
let cellNum;
let cellWidth;
let userInput;
let red;
let green;
let blue;


// CREATES DIVS IN CONTAINER
function addDivs() {
  for (i = 0; i < userInput; i++) {
    for (j = 0; j < userInput; j++) {
      hexColor();
      const newDiv = document.createElement("div");
      let formatWidth = cellWidth + "px";
      newDiv.style.width = formatWidth;
      newDiv.style.height = formatWidth;
      newDiv.style.display = "block";
      newDiv.style.backgroundColor = `rgb(${red} ${green} ${blue})`;
      newDiv.classList.add("div-item");
      container.appendChild(newDiv);
      
    }
  }
}

function increment(a) {
  let input = parseInt(a, 10);
  input += 0.1;
  return input;
}

// HEX COLOR GENERATOR
function hexColor() {
  red = Math.floor(Math.random(255) * 100);
  green = Math.floor(Math.random(255) * 100);
  blue = Math.floor(Math.random(255) * 100);
}


// USER PROMPT
button.addEventListener("click", () => {
  userInput = prompt("Pick a number of squares");

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
});


container.addEventListener('mouseover', function(event) {
  let selection = event.target;
  if (selection.matches('.div-item')) {
      // selection.classList.add('highlight'); // Add a class for the hover effect
      // Run other JavaScript logic here if needed
      let computedStyle = window.getComputedStyle(selection);
      let currentOpacity = parseFloat(computedStyle.opacity);
      console.log(`current opacity: ${currentOpacity}`);

      currentOpacity += 0.1;
      selection.style.opacity = currentOpacity
      console.log(`new opacity value: ${currentOpacity}`);
  }
});
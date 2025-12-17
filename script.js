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
let cellNum;
let cellWidth;

// CREATES DIVS IN CONTAINER
function addDivs() {
  for i = 0; i < 17; i++ {
    const newDiv = document.createElement("div");
    newDiv.style.width = cellWidth + "px";
    newDiv.style.height = cellHeight + "px";

    if (i % 2 = 0) {
      newDiv.className("even");
    } else {
      newDiv.className("odd");
    };
  } 
  container.appendChild(newDiv);
}

addDivs()
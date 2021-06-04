let position = 1; // The starting position of the grid
const gridSize = 100; // The total number of the grid cells
let lastPosition = 0;

function createGrid() {
  // Should create a new Div based on the gridSize variable value and append these divs to the element with id "target"
  const target = document.getElementById('target'); 
  for (let i = 1; i <= gridSize; i++) {
    const div = document.createElement('div');
    const text = document.createTextNode(i);
    div.id = 'n' + i
    div.appendChild(text);
    target.appendChild(div);
  }
  //console.log(target);
}

function move() {
  // Should increment the position variable by 1 each 100ms taking into consideration the gridSize variable value
  // This function should make use of the toggle function below to change the CSS class on a specific div element
  if (position <= gridSize) {
    toggle(position - 1)
    toggle(position);
    position++;
    timer = setTimeout(move, 100);
  }
}

function toggle(position) {
  // Takes a position parameter referencing a grid cell and sets the class name of that cell (or div) to the class 'on'
  // The CSS class "on" is defined in the styles.css file
  if (position > 0 && position <= gridSize) {
    document.getElementById('n' + position).classList.toggle('on');
  }
}

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { createGrid, move, toggle };
}

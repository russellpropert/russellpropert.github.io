let matrix = []
let numberOfBoxes = 0;
const maxHue = 320;
let colorIncrement = 0;
const saturation = '90%';
const lightness = '75%';

const createMatrix = (columns) => {
  matrix = [];
  let number = 1;
  for (let y = 0; y < columns; y++) {
    matrix.push([]);
    for (let x = 0; x < columns; x++) {
      matrix[y][x] = number;
      number++;
    }
  }
}

const errorMessage = (text, gridContainer) => {
  const p = document.createElement('p')
  const textNode = document.createTextNode(text);
  p.appendChild(textNode);
  console.log(textNode);
  gridContainer.appendChild(p);
}

const createGrid = (columns) => {
  const gridClass = document.querySelector('.grid');
  gridClass.style.gridTemplateColumns = '1fr';
  gridClass.style.gridTemplateRows = 'ifr';

  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = '';

  const searchLeters = /[^0-9]/g;
  if (columns == '') {
    errorMessage('Choose a number from 2 to 20.', gridContainer);
  } else if (columns === '0') {
    errorMessage('No columns is not an option.', gridContainer);
  } else if (columns === '1') {
    errorMessage('Really? That\'s not going to be much fun.', gridContainer);
  } else if (columns === '-0') {
    errorMessage('Seriously?', gridContainer);
  } else if (columns < 0) {
    errorMessage('That\'s not possible.', gridContainer);
  } else if (isNaN(parseFloat(columns))) {
    errorMessage('Number please.', gridContainer);
  } else if (!Number.isInteger(parseFloat(columns))) {
    errorMessage('Whole number please.', gridContainer);
  } else if (searchLeters.test(columns)) {
    errorMessage('Just a number.', gridContainer);
  } else if (columns > 20) {
    errorMessage('How about something between 2 and 20?', gridContainer);
  } else {
    createMatrix(columns);

    gridClass.style.gridTemplateColumns = `repeat(${matrix[0].length}, 60px)`;
    gridClass.style.gridTemplateRows = `repeat(${matrix.length}, 60px)`;

    numberOfBoxes = matrix[0].length * matrix.length - 1;
    colorIncrement = maxHue / numberOfBoxes;

    for (let x = 0; x < matrix[0].length; x++) {
      for (let y = 0; y < matrix.length; y++) {
        const div = document.createElement('div');
        div.classList.add('box');
        div.setAttribute('id', `x${x}y${y}`);
        gridContainer.append(div);
        div.innerText = matrix[x][y];
        const hue = ((matrix[x][y] - 1) * colorIncrement);
        div.style.background = `hsl(${Math.ceil(hue)}, ${saturation}, ${lightness})`;
      }
    }
  }
}

const updateGrid = () => {
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      const number = matrix[x][y];
      const gridBox = document.getElementById(`x${x}y${y}`);
      gridBox.innerText = number;
      const hue = ((matrix[x][y] - 1) * colorIncrement);
      gridBox.style.background = `hsl(${Math.ceil(hue)}, ${saturation}, ${lightness})`;
    }
  }
}

const swap = () => {
  let temp = 0;
  for (let x = 0; x < matrix[0].length - 1; x++) {
    for (let y = x + 1; y < matrix.length; y++) {
      temp = matrix[y][x]
      matrix[y][x] = matrix[x][y];
      matrix[x][y] = temp;
    }
  }
}

const exchangeCols = (i) => {
  let leftCol = i;
  let rightCol = matrix[0].length - i - 1;
  if (leftCol >= rightCol) return;
  for (let y = 0; y < matrix.length; y++) {
    const tempCol = matrix[y][leftCol];
    matrix[y][leftCol] = matrix[y][rightCol];
    matrix[y][rightCol] = tempCol;
  }
  i++;
  exchangeCols(i);
}

const rotate = () => {
  swap();
  exchangeCols(0);
  updateGrid();
  // for (let i = 0; i < matrix.length; i++) {
  //   console.log(JSON.stringify(matrix[i]));
  // }
}
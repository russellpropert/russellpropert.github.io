let matrix = []

const createMatrix = (columns) => {
  matrix = [];
  console.log(columns);
  let number = 1;
  for (let y = 0; y < columns; y++) {
    matrix.push([]);
    for (let x = 0; x < columns; x++) {
      matrix[y][x] = number;
      number++;
    }
  }
  console.log(matrix);
  createGrid();
}

const createGrid = () => {
  const gridClass = document.querySelector('.grid');
  gridClass.style.gridTemplateColumns = `repeat(${matrix[0].length}, 60px)`;
  gridClass.style.gridTemplateRows = `repeat(${matrix.length}, 60px)`;

  const gridContainer = document.getElementById('grid');
  gridContainer.innerHTML = '';
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      const div = document.createElement('div');
      div.classList.add('box');
      div.setAttribute('id', `x${x}y${y}`);
      gridContainer.append(div);
      div.innerText = matrix[x][y];
    }
  }
}

const updateGrid = () => {
  for (let x = 0; x < matrix[0].length; x++) {
    for (let y = 0; y < matrix.length; y++) {
      const number = matrix[x][y];
      const gridBox = document.getElementById(`x${x}y${y}`);
      gridBox.innerText = number;
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
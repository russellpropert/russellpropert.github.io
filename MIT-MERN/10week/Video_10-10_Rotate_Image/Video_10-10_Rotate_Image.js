const matrix = [
  [1,2,3,4,5],
  [6,7,8,9,10],
  [11,12,13,14,15],
  [16,17,18,19,20],
  [21,22,23,24,25]
];
const rotateMatrix =[];

for (let y = 0; y < matrix.length; y++) {
  rotateMatrix.push([]);
}


const swap = (x, y) => {
  rotateMatrix[x][y] = matrix[y][x];
  rotateMatrix[y][x] = matrix[x][y];
}

for (let x = 0; x < matrix[0].length; x++) {
  for (let y = 0; y < matrix.length; y++) {
    swap(x, y);
  }

}

const exchangeCols = (i) => {
  let leftCol = i;
  let rightCol = rotateMatrix[0].length - i - 1;
  if (leftCol >= rightCol) return;
  for (let y = 0; y < rotateMatrix.length; y++) {
    const tempCol = rotateMatrix[y][leftCol];
    rotateMatrix[y][leftCol] = rotateMatrix[y][rightCol];
    rotateMatrix[y][rightCol] = tempCol;
  }
  i++;
  exchangeCols(i);
}

exchangeCols(0);

for (let i = 0; i < matrix.length; i++) {
  console.log(JSON.stringify(matrix[i]));
}

for (let i = 0; i < matrix.length; i++) {
console.log(JSON.stringify(rotateMatrix[i]));
}
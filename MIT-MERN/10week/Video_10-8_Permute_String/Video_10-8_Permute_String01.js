let string = 'abc';
let stringArray = [];
let stringOrder = [];
let columns = [];
let rounds = 1;
let count = 1;

for (let i = 0; i < string.length; i++) {
  stringArray.push(string[i]);
  stringOrder.push(i);
  columns[i] = 0
  rounds *= i + 1;
}

console.log(stringArray);
console.log(stringOrder);
console.log(columns);

const permute = (currentColumn) => {
  let output = '';
    for (let i = 0; i < string.length; i++) {
      output += stringArray[stringOrder[i]]
    }
  console.log(output);
  count += 1;
  if(count > rounds) return;
  let order0 = stringOrder[currentColumn - 1];
  let order1 = stringOrder[currentColumn];
  stringOrder[currentColumn - 1] = order1;
  stringOrder[currentColumn] = order0;
  permute(currentColumn);
}


permute(1);
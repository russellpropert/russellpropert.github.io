console.log('Arrays and Objects');
// clone the following array
let a = [1, 2, 3, 4];
// answer
let b = [...a];
console.log(b);

// clone an object
let c = { a: 1, b: 2 };
// answer
let d = { ...c };
console.log(d);

// clone first n properties of an object
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10};
const firstProperties = (object, n) => {
  let newObj = {};
  for (let i = 0; i < n; i++) {
    let key = Object.keys(object)[i];
    newObj[key] = object[key];
  }

  return newObj;
}
console.log(firstProperties(obj, 8));

//create a function that returns an array n long with numbers 1 to n
const setArray = (n) => Array.from({length: n}, (a, i) => i + 1);
console.log(setArray(10));

// create a function to sum every other element of an array with
const addEveryOther = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i += 2) {
    sum += array[i];
  }

  return sum;
}

console.log(addEveryOther(setArray(7)));
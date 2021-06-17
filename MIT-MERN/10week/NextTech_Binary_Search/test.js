const generateAlphabetArray = (charA = 'a', charZ = 'z') => {
  let array = [], j = charZ.charCodeAt(0);
  for (let i = charA.charCodeAt(0); i <= j; ++i) {
      array.push(String.fromCharCode(i));
  }

  return array;
}

const testcharCodeAt = generateAlphabetArray();
console.log(testcharCodeAt);


const functionA = ([testBrackets]) => {
  return testBrackets;
}

console.log(functionA('Testing'));
  //returns 'T'
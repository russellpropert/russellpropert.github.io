//Array flattenr activity
// Define a function arrayFlattener with a 2 dimensional array as parameter:
// example of 2 dimensional array: [1,[2,3],4,5]

//Return a new 1 dimensional array like, [1,2,3,4]

//your code here
let newArray = [];

function arrayFlattener(array) {
  for (let i = 0; i < array.length; i++) {
    
    if (array[i].length === undefined) {
      newArray.push(array[i]);
    } else {
    arrayFlattener(array[i]);
    }

  }

  return newArray;
}

//uncomment next line one by one, then check the console for results
console.log(arrayFlattener([1,[2,3],4,5,[6,[7,[8,9,[10,11,12]]]]]))

//don't change this line
if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}

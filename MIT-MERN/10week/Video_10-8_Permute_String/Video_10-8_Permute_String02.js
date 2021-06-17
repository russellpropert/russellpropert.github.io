const array = ['a', 'b', 'c'];

for (let i=0; i < array.length; i++) {
  let oneCharacter = array.splice(i, 1);
  console.log(oneCharacter[0], array[0], array[1]);
  console.log(oneCharacter[0], array[1], array[0]);
  array.splice(i, 0, oneCharacter[0]);
}
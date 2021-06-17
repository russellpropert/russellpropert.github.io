stringToPermute = 'abcde'

function permute(string) {
  if (string.length === 1) return string;
  let pick = "";
  const permutations = [];
  for (let i = 0; i < string.length; i++) {
    pick = string[i];
    let remainder = string.slice(0,i) + string.slice(i + 1, string.length);
    for (let perm of permute(remainder)) {
      permutations.push(pick + perm);
    }
  }
  return permutations;
}

let array = permute(stringToPermute);

console.log(array);
const terrestrials = ["fox", "lion", "elephant"];
const aquatics = ["shark", "whale", "octopus"];

// TODO: create the array allAnimals that contains all animals from terrestrials and aquatics arrays
const allAnimals = [...terrestrials, ...aquatics];
console.log(allAnimals);

//don't change this line
if (typeof module !== "undefined") {
  module.exports = { allAnimals };
}

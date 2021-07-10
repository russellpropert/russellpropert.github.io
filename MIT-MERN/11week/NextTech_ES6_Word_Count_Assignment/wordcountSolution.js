let lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

// TODO: write a function to split a string into an array of words
const words = (data) => {
  // Split this data into an array of words called words
  let words = data.split(' ');
  // Remove any , or . using filter on the array words
  words = words.map((item) => item.replace(',', '')).map((item) => item.replace('.', ''));
  // Return the words array
  return words;
};

// This should print the length of the words array returned
console.log(words(lorem).length);

// TODO: write a function to count the number of occurrences of each word
const wordFrequency = (words) => {
  // Instantiate our object of words
  let wordsObject = {};
  // Remove duplicates from the words array.
  // Set's do not allow duplicates. So we create a Set and turn it into an array
  const uniqueWords = [...new Set(words)];
  console.log(uniqueWords);
  // Loop through each unique word
  uniqueWords.forEach((word) => {
    // Assign the words object the key as the word
    // Assign the word the value of how many times we find the word in words
    wordsObject[word] = words.filter((w) => w === word).length;
  });
  // Return the object
  return wordsObject;
};

// This should print an array containing all words and their occurrences
console.log(wordFrequency(words(lorem)));

//don't change this line
if (typeof module !== 'undefined') {
  module.exports = { words, wordFrequency, lorem };
}

const countVowels = inputString => {
  let numberOfVowels = 0;
  const vowels = ["a", "e", "i", "o", "u"];
  const inputArray = inputString.split("");

  for (let char of inputArray) {
    if (vowels.includes(char)) numberOfVowels++;
  }

  return numberOfVowels;
};

module.exports = countVowels;

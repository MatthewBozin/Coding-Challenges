// Given a string s consisting of words and spaces,
// return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

//TIL string methods are way faster than for loop smh

const lengthOfLastWordMine = (str) => {
  let letters = 0;
  for (i = str.length - 1; i >= 0; i--) {
    if (str.charAt(i) !== " ") {
      letters += 1;
    } else if (letters) {
      return letters;
    }
  }
  return letters;
};

const lengthOfLastWord = (str) => str.trim().split(" ").pop().length;

console.assert(
  lengthOfLastWord("") === 0,
  "Returns 0 if given an empty string."
);

console.assert(
  lengthOfLastWord("Abracadabra!") === 12,
  "Returns length of entire string if string is one word."
);

console.assert(
  lengthOfLastWord("   life   is      pain   ") === 4,
  "Returns length of last word if sentence has tons of spaces."
);

console.assert(
  lengthOfLastWord("Hello World") === 5,
  "Returns the length of the last word in a sentence."
);

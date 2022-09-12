// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

//Parameters: string with only letters and numbers
//Returns: number
//Examples: 'aaaa' => 1, 'aabb' => 2, 'abcd' => 0
//Pseudocode:
//create object with property for each letter, value equaling count
//reduce object, increasing a total for each property with value equaling 2 or greater

const duplicateCount = text => {
  let counts = {};
  [...text.toLowerCase()].forEach(l => {
    if (counts[l]) {counts[l]++};
    if (!counts[l]) {counts[l] = 1};
  })
  return Object.keys(counts).reduce((total, key) => {
    return counts[key] > 1 ? total + 1 : total;
  }, 0)
}

console.log(duplicateCount('abba'));
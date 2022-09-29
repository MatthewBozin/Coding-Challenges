// Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. 
// Bonus points for a solution that is efficient and/or that uses only built-in language functions. 
// Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

// Example
// madam -> True
// adamm -> True
// junk -> False

//Pseudocode
    //use .reduce() to find the number of times each character appears
    //for each character, if it appears an odd amount of times, increment a counter
    //as long as the odds counter is less than 2, string is a palindrome

const permuteAPalindrome = (input) => { 
  const counts = [...input].reduce((obj, l) => {
    if (obj[l]) {obj[l]++} else {obj[l] = 1}
    return obj
  }, {})
  let odds = 0
  Object.keys(counts).forEach((key) => {
    if (counts[key] % 2 !== 0) odds++
  })
  return odds <= 1
}

console.log(permuteAPalindrome('aasmm'))

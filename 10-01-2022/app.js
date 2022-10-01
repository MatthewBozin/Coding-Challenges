// Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. 
// For example, the input 'sTreSS' should return 'T'.
// If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.

const firstNonRepeatingLetter = (s) => {
  let dict = s.toLowerCase().split('').reduce((d, l) => {
    if (d[l]) {d[l]++} else {d[l] = 1}
    return d
  }, {})
  let letters = Object.keys(dict).filter((l) => {
    return dict[l] === 1
  })    
  if (letters.length === 0) return ''
  return [...s].find((l) => {
    return letters.includes(l.toLowerCase())
  })
}

console.log(firstNonRepeatingLetter(''))

module.exports = firstNonRepeatingLetter;
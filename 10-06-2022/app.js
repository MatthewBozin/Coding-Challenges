// Oh, no! The number has been mixed up with the text. Your goal is to retrieve the number from the text, can you return the number back to its original state?
// Your task is to return a number from a string.
// You will be given a string of numbers and letters mixed up, you have to return all the numbers in that string in the order they occur.

//Parameters: a string
//Returns: a number, made up of all the numbers detected in the string
//Examples:
// '123' => 123, '1z2z3z' => 123, 'aaaa' => ???
// Question for interviewer: what should I return if the string has no numbers?
// In this case, kata has no answer for that and doesn't check
//Pseudocode:
// spread string into array
// use Array.filter()
//  as callback, use !isNaN() to determine if each character is a number
// join() the resulting array
// return parseInt() the resulting string

const filterStringDraft = (value) => {
  let filtered = [...value].filter((el) => {
    return !isNaN(el)
  })
  return parseInt(filtered.join(''))
}

//First Tryyyyyyyyyy

const filterString = value => parseInt([...value].filter(el => !isNaN(el)).join(''))

console.log(filterString('1z2z3z'))

module.exports = filterString
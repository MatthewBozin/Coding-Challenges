// Write a function that finds the sum of all its arguments.
// eg:
// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

//Parameters: a variable amount of arguments, all numbers
//Returns: a single number
//Examples: (1, 2, 3) => (6, 8, 2) => 10, (1, 2, 3, 4, 5) => 15
//Pseudocode:
//Use rest parameter to collect arguments into an array
//Array.reduce() to find the total of all the elements in the array

const sum = (...numbers) => {
  return numbers.reduce((t, c) => {return t + c})
}

const sumRefactor = (...numbers) => numbers.reduce((t, c) => t + c);

console.log(sum(1, 2, 3, 4, 5))
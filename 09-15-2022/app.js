// Digital root is the recursive sum of all the digits in a number.
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. 
// The input will be a non-negative integer.

//Parameters: a positive integer
//Returns: a single digit positive integer
//Examples: 456 => 6, 19 => 1, 4 => 4

const digitalRoot = n => {
  while (n.toString().length > 1) {
    n = +n.toString().split('').reduce((t, c) => +t + +c, 0).toString()
  }
  return n
}

console.log(digitalRoot(478787))
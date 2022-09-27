// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

//Parameters: an array of numbers
//Returns: another array of numbers
//Examples:
    // [7, 1]  =>  [1, 7]
    // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
    // [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//Pseudocode
    //array.forEach create a new array with just the odds
    //sort the array of odds by ascending
    //array.map to replace odds with array of ascending odds

const sortArray = (array) => {
  let odds = array.filter((n) => {
    return n % 2 !== 0
  }).sort((a, b) => {
    return a - b
  })
  let oddsIndex = 0
  return array.map((n) => {
    if (n % 2 !== 0) {
        oddsIndex++
        return odds[oddsIndex - 1]
    }
    return n
  })
}

const sortArrayRefactor = array => {
  const odds = array.filter(n => n % 2 !== 0).sort((a, b) => a - b)
  let oddsIndex = 0
  return array.map(n => {
    if (n % 2 !== 0) {
        oddsIndex++
        return odds[oddsIndex - 1]
    }
    return n
  })
}

const sortArrayOptimized = array => {
  const odds = array.filter(n => n % 2 !== 0).sort((a, b) => a - b)
  return array.map((n) => n % 2 ? odds.shift() : n);
}

console.log(sortArrayOptimized([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))
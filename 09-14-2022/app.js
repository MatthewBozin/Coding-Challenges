// Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
// If there are multiple elements with the same value, remove the one with a lower index. 
// If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

//Parameters: an array of integers
//Returns: an array of integers, not same array as parameter
//Examples: [1,2,3,4,5] => [2,3,4,5], [0] => []
//Pseudocode:
    //Determine value of minimum
        //Reduce using minimum as total
    //Filter numbers except first number of value === minimum
        //Use closure to determine whether number has already been removed

const removeSmallest = numbers => {
  const min = numbers.reduce((m, n) => n < m ? n : m, numbers[0])
  let removed = false
  return numbers.filter(n => {
    if (n === min && removed === false) {
      removed = true
      return false
    }
    return true
  })
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
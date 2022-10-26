// Given an array of integers , Find the Nth smallest element in this array of integers.
// Array/list size is at least 3 .
// Array/list's numbers could be a mixture of positives , negatives and zeros .
// Repetition in array/list's numbers could occur , so don't Remove Duplications .

//input an array of at least 3 integers, duplicates allowed. positives, negatives, and zeros allowed
//output an integer

const nthSmallest = (array, n) => {
    //sort the array in ascending order by numeric value
    //return sortedArray[n]
    return array.sort((a, b) => a - b)[n - 1]
}

const nthSmallestOneLine = (array, n) => array.sort((a, b) => a - b)[n - 1];

console.log(nthSmallest([3,1,2], 2), 2) 
console.log(nthSmallest([15,20,7,10,4,3], 3), 7) 
console.log(nthSmallest([15,20,7,10,4,3], 3), 7) 
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92], 5), 92) 
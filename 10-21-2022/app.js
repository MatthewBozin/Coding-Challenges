// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). 
// The original array will be not empty and will contain at least "number" even numbers.
// For example:
// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

const lastEvenNumbers = (array, n) => {
    //loop through the array backwards until it finds n even numbers
    let evens = []
    let count = 0
    for (i = array.length; i >= 0; i--) {
        if (count === n) break
        if (array[i] % 2 === 0) {
            evens.unshift(array[i])
            count++
        }
    }
    return evens
    //when it finds an even number, .unshift it to final array
}

console.log(lastEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8])
console.log(lastEvenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), [-8, 26])
console.log(lastEvenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), [6])
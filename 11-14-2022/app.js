// You need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
// The input to the function will be an array of three distinct numbers.

// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):

// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

const gimme = (arr) => {
    //create an object with key=number and value=index of the number
    //sort the array by value
    //index 1 of sorted array is the value I want
    //return object[sortedArray[1]]

    const cache = arr.reduce((obj, num, i) => {
        obj[num] = i
        return obj
    }, {})

    const sortedArray = arr.sort((a, b) => a - b)

    return cache[sortedArray[1]]
}

console.log(gimme([2, 3, 1]), 0)
console.log(gimme([5, 10, 14]), 1)
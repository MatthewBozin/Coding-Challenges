// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// Example:
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the array and no difference with it, your function should return the int 0.
// Note: N may be 1 or less (in the latter case, the first array will be []).

//Find the difference between the sums of each array
//take the absolute value of arr1.reduce - arr2.reduce

const findDeletedNumber = (arr1, arr2) => {
    if (!arr1.length || !arr2.length) return 0
    let sum1 = arr1.reduce((total, n) => {
        return total + n
    }, 0)
    let sum2 = arr2.reduce((total, n) => {
        return total + n
    }, 0)
    return Math.abs(sum1 - sum2)
}

const findDeletedNumberOneLine = (arr1, arr2) => Math.abs(arr1.reduce((t, n) => t + n) - arr2.reduce((t, n) => t + n))

console.log(findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5, 'Deletion')
console.log(findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
console.log(findDeletedNumber([], [5,7,6,9,4,8,1,2,3]), 0, 'No deletion')
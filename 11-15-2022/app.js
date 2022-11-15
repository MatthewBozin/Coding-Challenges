// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

const sortArrayOrig = (arr) => {
    //get array of all odd numbers
    //sort that array
    let odds = arr.filter(n => n % 2 !== 0).sort((a, b) => a - b)
    //map through array replacing any odd numbers with first element of odds array, using .shift() to remove the first element each time
    return arr.map((n) => {
        if (n % 2 === 0) return n
        return odds.shift()
    })
    
}

const sortArray = (arr) => {
    let odds = arr.filter(n => n % 2).sort((a, b) => a - b)
    return arr.map((n) => n % 2 === 0 ? n : odds.shift())
}

//first tryyyyyy
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4])
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0])
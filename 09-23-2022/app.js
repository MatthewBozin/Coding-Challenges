// An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.
// Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.

//Parameters: an array of numbers
//Returns: a number

//Examples
// [0, 0, 0, 0, 0, 1]  -->  1
// # 1 group of 5 zeros (>= 4), thus the result is 1

// [0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
// # 2 group of 4 zeros (>= 4), thus the result is 2

// [0, 0, 0, 0, 1, 0]  -->  0 
// # 1 group of 4 zeros and 1 group of 1 zero (< 4)
// # _every_ sequence of zeros must be at least 4 long, thus the result is 0

// [0, 0, 0, 1, 0, 0]  -->  0
// # 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

// [1, 2, 3, 4, 5]  -->  0
// # no zeros

// []  -->  0
// # no zeros

//Pseudocode
//create zeros variable
//create sequences variable
//array.forEach:
    //if el is 0, zeros++
    //if el !is 0, if zeros >= 4, sequences++
        //set zeros to 0
//if zeros >= 4, sequences++
//return sequences

const zeroPlentiful = (arr) => {
    let zeros = 0
    let sequences = 0
    for (el of arr) {
        if (el === 0) {
            zeros++
        } else {
            if (zeros === 0) continue
            if (zeros >= 4) {
                sequences++
                zeros = 0
            } else {
                return 0
            }
        }
    }
    return zeros >= 4 ? sequences+1 
        : zeros === 0 ? sequences
        : 0
}

console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0]))

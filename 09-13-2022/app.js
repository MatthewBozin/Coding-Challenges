// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).
// Note: If the number is a multiple of both 3 and 5, only count it once.

//Parameters: a number, could be negative
//Returns: a number, positive
//Examples: 10 => 23, 3 => 0, 5 => 3
//Pseudocode:
//Define variable total
//For loop: if number is multiple of 3 or 5, add to total
//Return total

const solution = number => {
    let total = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) total += i;
    }
    return total;
}

console.log(solution(-10));
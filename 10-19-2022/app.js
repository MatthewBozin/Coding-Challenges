// It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
// All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

const getAverage = (scores) => {
    //reduce to get the total
    let reduced = scores.reduce((total, current) => {
        return total + current
    }, 0)
    let divided = reduced / scores.length
    //divide the total by scores.length
    return Math.floor(divided)
    //Math.floor() the result, or ++ it
}

const getAverageOneLine = scores => Math.floor(scores.reduce((total, current) => total + current) / scores.length)

console.log(getAverage([1,2,3,4,5,]), 3)
console.log(getAverageOneLine([1,2,3,4,5,]), 3)
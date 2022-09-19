// I will give you an integer. Give me back a shape that is as long and wide as the integer. The integer will be a whole number between 1 and 50.

//Parameters: a number between 1 and 50
//Returns: a string
//Examples: 
// n = 3 =>
// +++
// +++
// +++
//Pseudocode:
//Create string for row
//Create string for shape
//For i < integer
    //add '+' to row
//For i < integer - 1
    //add '\n' + row to shape
    //unless it is the first row, in which just add row

const generateShape = (integer) => {
    let row = ''
    let shape = ''
    for (i = 0; i < integer; i++) {
        row += '+'
    }
    for (i = 0; i < integer - 1; i++) {
        if (i === 0) {shape += row}
        shape += `\n${row}`
    }
    return shape
}

console.log(generateShape(10))
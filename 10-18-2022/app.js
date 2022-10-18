//Given a string of text, return true or false indicating whether or not the text is a palindrome. e.g
//palindromeChecker('racecar') will return true

//accepts a string
//returns a boolean

const palindromeChecker = (string) => {
    //split, reverse, and join the string
    const newString = [...string].reverse().join('')
    //compare new string to original string
    return newString === string
}

const palindromeChecker2 = (string) => {
    //split, reverse, and join the string
    const newString = string.split('').reverse().join('')
    //compare new string to original string
    return newString === string
}

const palindromeChecker3 = (string) => {
    //split, reverse, and join the string
    const newString = [...string].reduce((string, char) => {
        return char + string
    }, '')
    //compare new string to original string
    return newString === string
}

const palindromeChecker4 = (text) => {
    //compares each character up to the midpoint with its backwards complement
    //extremely fast because we don't even need to split the string
    for (let i = 0; i < text.length/2; i++) {
        if (text[i] !== text[text.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromeChecker3('racecar'))
console.log(palindromeChecker3('icecream'))

let iterations = 2000000;

//443ms
console.time('Function #1');
for(let i = 0; i < iterations; i++ ){
    palindromeChecker('racecar');
};
console.timeEnd('Function #1')

//549ms
console.time('Function #2');
for(let i = 0; i < iterations; i++ ){
    palindromeChecker2('racecar');
};
console.timeEnd('Function #2')

//160ms
console.time('Function #3');
for(let i = 0; i < iterations; i++ ){
    palindromeChecker3('racecar');
};
console.timeEnd('Function #3')

//28ms
console.time('Function #4');
for(let i = 0; i < iterations; i++ ){
    palindromeChecker4('racecar');
};
console.timeEnd('Function #4')

//[...string] is faster than string.split()
//reduce is almost twice as fast as method chaining
//the for loop is SIGNIFICANTLY faster than any other method
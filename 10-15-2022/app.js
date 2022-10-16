//Given a string of text containing 0 or more vowels, count the number of vowels that can be found within the text. For example:
//vowelsCounter('anehizxcv') // will return 3


//183ms
const vowelsCounter1 = (text) => {
    const vowels = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true
    }
    return [...text].reduce((count, letter) => {
        return vowels[letter] ? count + 1 : count
    }, 0)
}


//235ms
const vowels = ["a", "e", "i", "o", "u"]
function vowelsCounter2(text) {
    // Initialize counter
    let counter = 0;

    // Loop through text to test if each character is a vowel
    for (let letter of text.toLowerCase()) {
        if (vowels.includes(letter)) {
            counter++
        }
    }

    // Return number of vowels
    return counter
}


//151ms
function vowelsCounter3(text) {
    // Search text with Regex and store all matching instances 
    let matchingInstances = text.match(/[aeiou]/gi);

    // Check if matching instances exist then calculate length
    matchingInstances ? matchingInstances.length : 0
}

// let iterations = 1000000;
// console.time('Function #1');
// for(let i = 0; i < iterations; i++ ){
//     vowelsCounter1('anehizxcv');
// };
// console.timeEnd('Function #1')

// console.time('Function #2');
// for(let i = 0; i < iterations; i++ ){
//     vowelsCounter2('anehizxcv');
// };
// console.timeEnd('Function #2')

// console.time('Function #3');
// for(let i = 0; i < iterations; i++ ){
//     vowelsCounter3('anehizxcv');
// };
// console.timeEnd('Function #3')


module.exports = vowelsCounter1;
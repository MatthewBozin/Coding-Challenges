//Given a string of text, find and return the most recurring character. e.g
//maxRecurringChar('aabacada') // will return 'a'

//receives a string
//returns a one-character string

//what if string is empty?

const maxRecurringChar = (string) => {
    //reduce string, resulting in a character map
    const charMap = [...string].reduce((map, curr) => {
        //if curr exists in map as a property,
        if (map[curr]) {
            map[curr] += 1
        } else {
            map[curr] = 1
        }
        return map
    }, {})
    //get keys of character map
    let value = ''
    let most = ''
    for (key in charMap) {
        if (charMap[key] > value) {
            value = charMap[key]
            most = key
        }
    }
    return most
}

function maxRecurringChar1(text) {
    let charMap = {}
    let maxCharValue = 0
    let maxChar = ''

    for (let char of text) {
        if (charMap.hasOwnProperty(char)) {
            charMap[char]++
        } else {
            charMap[char] = 1
        }
    }

    for (let char in charMap) {
        if (charMap[char] > maxCharValue) {
            maxCharValue = charMap[char]
            maxChar = char
        }
    }

    return maxChar
}

let iterations = 1000000;
console.time('Function #1');
for(let i = 0; i < iterations; i++ ){
    maxRecurringChar('aabacada');
};
console.timeEnd('Function #1')

console.time('Function #2');
for(let i = 0; i < iterations; i++ ){
    maxRecurringChar1('aabacada');
};
console.timeEnd('Function #2')

// console.log(maxRecurringChar('aabacada')) //=> 'a'
// console.log(maxRecurringChar('')) //=> ''
// console.log(maxRecurringChar('aabb')) //=> ''
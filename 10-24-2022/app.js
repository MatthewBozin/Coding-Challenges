// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

const stringToParens = (str) => {
    //reduce string into cache recording which letters have been seen more than once
    const string = str.toLowerCase()
    const cache = [...string].reduce((obj, letter) => {
        if (!obj[letter]) {obj[letter] = 1} else {obj[letter] += 1}
        return obj
    }, {})
    //map string => cache[character] > 1 ? ')' : '('
    return [...string].map((character) => cache[character] > 1 ? ')' : '(').join('')
}

console.log(stringToParens('din'), '(((')
console.log(stringToParens('recede'), '()()()')
console.log(stringToParens('Success'), ')())())')
console.log(stringToParens('(( @'), '))((')
// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
// All inputs will be valid.

const last = (string) => {
    //split string by " " to get array of words
    //use a sort() method on the array
        //sort by charCodeAt(word.length - 1)
    return string.split(' ').sort((a, b) => {
        return a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1)
    })
}

const lastOneLine = string => string.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))

console.log(last('man i need a taxi up to ubud'), ['a', 'need', 'ubud', 'i', 'taxi', 'man', 'to', 'up'])
console.log(last('what time are we climbing up the volcano'), ['time', 'are', 'we', 'the', 'climbing', 'volcano', 'up', 'what'])
console.log(last('take me to semynak'), ['take', 'me', 'semynak', 'to'])
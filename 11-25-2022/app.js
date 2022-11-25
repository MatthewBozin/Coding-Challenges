// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)
// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

const isIsogramOrig = (str) => {
    let cache = {}
    for (char of [...str]) {
        if (cache[char.toLowerCase()]) return false
        cache[char.toLowerCase()] = true
    }
    return true
}

const isIsogram = str => new Set(str.toLowerCase()).size === str.length

console.log(isIsogram('mose'))
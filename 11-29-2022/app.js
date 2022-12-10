// You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// Strings will be lowercase only, no spaces 

const dup = arr => arr.map(str => {
    let last = ''
    return [...str].filter(char => {
        let newLast = last
        last = char
        return char !== newLast
    }).join('')
})

const dupOptimized = arr => arr.map(str => [...str].filter(l, i, a => l != a[i-1]).join(''))

console.log(dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
console.log(dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
console.log(dup(["kelless","keenness"]), ['keles','kenes'])
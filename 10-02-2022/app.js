// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
// Notes:
// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

const scrambleInitial = (str1, str2) => {
    const count = str => [...str].reduce((t, c) => {
        if (t[c]) {t[c]++} else {t[c] = 1}
        return t
    }, {})
    const obj1 = count(str1)
    const obj2 = count(str2)
    return Object.keys(obj2).every((key) => {
        return obj2[key] <= obj1[key]
    })
}

const scramble = (str1, str2) => {
    const count = str => [...str].reduce((t, c) => {
        if (t[c]) {t[c]++} else {t[c] = 1}
        return t
    }, {})
    const obj1 = count(str1)
    const obj2 = count(str2)
    return Object.keys(obj2).every(key => obj2[key] <= obj1[key])
}

module.exports = scramble
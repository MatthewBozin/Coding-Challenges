const input = require("./input")

const test = [
    "2-4,6-8", //false
    "6-8,2-4", //false
    "2-6,6-8", //true
    "10-85,9-10" //true
]

const contains = (arr) => {
    let count = 0
    for (el of arr) {
        let [first, second] = el.split(',')
        let [first1, first2] = first.split('-')
        let [second1, second2] = second.split('-')
        console.log((+first1 >= +second1 && +first2 <= +second2) || (+first1 <= +second1 && +first2 >= +second2))
        if ((+first1 >= +second1 && +first2 <= +second2) || (+first1 <= +second1 && +first2 >= +second2)) count++
    }
    return count
}

const overlaps = (arr) => {
    let count = 0
    for (el of arr) {
        let [first, second] = el.split(',')
        let [x1, x2] = first.split('-')
        let [y1, y2] = second.split('-')
        console.log(!(+x1 > +y2 || +y1 > +x2))
        if (!(+x1 > +y2 || +y1 > +x2)) count++
    }
    return count
}

console.log(overlaps(input))
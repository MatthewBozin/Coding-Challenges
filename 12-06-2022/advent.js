const input = require("./input")

const test = "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw"

const detect = (signal) => {
    let arr = [...signal]
    let last4 = []
    let count = 0
    for (letter of arr) {
        //console.log(new Set(last4).size)
        //console.log(last4.length)
        if (new Set(last4).size === 14) {return count}
        last4.push(letter) 
        if (last4.length > 14) {last4.shift()}
        count++
    }
}

console.log(detect(input))
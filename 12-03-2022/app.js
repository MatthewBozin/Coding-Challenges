const input = require("./input")

const test = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
]

let priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

const items = (sacks) => {
    let total = 0
    let priorities = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //cut string in half
    for (let sack of sacks) {
        let first = sack.slice(0, sack.length / 2)
        let second = sack.slice(sack.length / 2, sack.length)
        let seen = {}
        for (letter of first) {
            if (second.includes(letter) && !seen[letter]) {
                seen[letter] = true
                console.log(letter)
                console.log([...priorities].indexOf(letter) + 1)
                total += ([...priorities].indexOf(letter) + 1)
            }
        }
    }
    return total
}

test2 = [
    "vJrwpWtwJgWrhcsFMMfFFhFp",
    "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
    "PmmdzqPrVvPwwTWBwg",
    "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
    "ttgJtRGJQctTZtZT",
    "CrZsJsPPZsGzwwsLwLmpwMDw"
]

const badges = (sacks) => {
    let total = 0
    let groups = []
    for (i = 0; i < sacks.length; i += 3) {
        groups.push(sacks.slice(i, i + 3))
    }
    console.log(groups)
    for (group of groups) {
        let seen = {}
        for (letter of group[0]) {
            if ([...group[1]].includes(letter) && [...group[2]].includes(letter) && !seen[letter]) {
                seen[letter] = true
                total += ([...priorities].indexOf(letter) + 1)
            }
        }
    }
    console.log(total)
}

console.log(badges(input))
const input = require("./input")

//advent of code day 1

const findMostCalories = (elves) => {
    let superArr = []
    let arr = []
    elves.forEach((elf) => {
        if (elf === "") {
            superArr.push(arr)
            arr = []
        } else {
            arr.push(elf)
        }
    })
    return superArr.reduce((most, arr) => {
        const current = arr.reduce((total, num) => total + +num, 0)
        return current > most ? current : most
    }, 0)
}

const findTopThree = (elves) => {
    let superArr = []
    let arr = []
    elves.forEach((elf) => {
        if (elf === "") {
            superArr.push(arr)
            arr = []
        } else {
            arr.push(elf)
        }
    })
    let topThree = []
    for (i = 0; i < 3; i++) {
        topThree.push(superArr.reduce((most, arr) => {
            const current = arr.reduce((total, num) => total + +num, 0)
            if (topThree.includes(current)) return most
            return current > most ? current : most
        }, 0))
    }
    return topThree.reduce((total, num) => total + num)
}

console.log(findTopThree(input))
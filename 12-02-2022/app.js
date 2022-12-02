const input = require("./input")

const score = (games) => {
    const shapes = {
        X: {A: 3, B: 0, C: 6, score: 1},
        Y: {A: 6, B: 3, C: 0, score: 2},
        Z: {A: 0, B: 6, C: 3, score: 3}
    }
    return games.reduce((total, game) => {
        let split = game.split(" ")
        // console.log(split)
        // console.log(shapes[split[1]].score + shapes[split[1]][split[0]])
        return (total + shapes[split[1]].score + shapes[split[1]][split[0]])
    }, 0)
    // let total = 0
    // for (game of games) {
    //     let split = game.split(" ")
    //     total = total + shapes[split[0]].score + shapes[split[0]][split[1]]
    // }
    // return total
}

const scorePart2 = (games) => {
    //x = lose, y = draw, z = win
    const shapes = {
        A: {X: 3, Y: 4, Z: 8},
        B: {X: 1, Y: 5, Z: 9},
        C: {X: 2, Y: 6, Z: 7},
    }
    return games.reduce((total, game) => {
        let split = game.split(" ")
        // console.log(split)
        // console.log(shapes[split[0]][split[1]])
        return (total + shapes[split[0]][split[1]])
    }, 0)
}

//console.log(scorePart2(["A Y", "B X", "C Z"]))
console.log(scorePart2(input))
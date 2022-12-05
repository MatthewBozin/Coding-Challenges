const input = require("./input")

let stacks = [
    ['M','J','C','B','F','R','L','H'],
    ['Z','C','D'],
    ['H','J','F','C','N','G','W'],
    ['P','J','D','M','T','S','B'],
    ['N','C','D','R','J'],
    ['W','L','D','Q','P','J','G','Z'],
    ['P','Z','T','F','R','H'],
    ['L','V','M','G'],
    ['C','B','G','P','F','Q','R','J']
]

const testStacks = [
    ['Z','N'],
    ['M','C','D'],
    ['P']
]

const testOrders = [
    "move 1 from 2 to 1",
    "move 3 from 1 to 3",
    "move 2 from 2 to 1",
    "move 1 from 1 to 2"
]

const move = (orders, oldstacks) => {
    let stacks = oldstacks
    console.log(stacks)
    for (let order of orders) {
        let split = order.split(' ')
        let amount = +split[1]
        let from = +split[3] - 1
        let to = +split[5] - 1
        for (i = 0; i < amount; i++) {
            //console.log(stacks[+from - 1][stacks[+from - 1].length - 1])
            stacks[to].push(stacks[from][stacks[from].length - 1])
            stacks[from].pop()
            //console.log(stacks)
        }
    }
    let str = ""
    for (let stack of stacks) {
        str += stack.pop()
    }
    return str
}

const move2 = (orders, oldstacks) => {
    let stacks = oldstacks
    console.log(stacks)
    for (let order of orders) {
        let split = order.split(' ')
        let amount = +split[1]
        let from = +split[3] - 1
        let to = +split[5] - 1
        // console.log(amount)
        // console.log(stacks[from].length - amount)
        // console.log(stacks[from][stacks[from].length - 1])
        let toMove = stacks[from].splice(stacks[from].length - (amount), amount)
        //console.log(toMove)
        stacks[to] = [...stacks[to], ...toMove]
        //console.log(stacks[to])
    }
    let str = ""
    for (let stack of stacks) {
        str += stack.pop()
    }
    return str
}

console.log(move2(input, stacks))
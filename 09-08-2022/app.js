//Given an integral number, determine if it's a square number

const isSquare = n => Math.sqrt(n) % 1 === 0;

console.log(isSquare(5));
// You might know some pretty large perfect squares. But what about the NEXT one?
// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
// Examples:(Input --> Output)
// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

const findNextSquare = (sq) => {
  if (sq > 0 && Math.sqrt(sq) % 1 === 0) {
    return Math.pow(Math.sqrt(sq) + 1, 2)
  }
  return -1;
}

const findNextSquareOneLiner = sq => {
  return sq > 0 && Math.sqrt(sq) % 1 === 0 ? Math.pow(Math.sqrt(sq) + 1, 2) : -1
}

console.log(findNextSquareOneLiner(144))
// Consider an array/list of sheep where some sheep may be missing from their place. 
// We need a function that counts the number of sheep present in the array (true means present).
// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// function countSheeps(arrayOfSheep) {
//   return arrayOfSheep.reduce((count, sheep) => {
//     return sheep ? count + 1 : count
//   }, 0)
// }

const countSheeps = arrayOfSheep => arrayOfSheep.reduce((count, sheep) => sheep ? count + 1 : count, 0)

console.log(countSheeps(
  [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
))
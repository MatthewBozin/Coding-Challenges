// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.
// For example, a tower with 3 floors looks like this:
// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

function towerBuilder(n) {
  const tower = [];
  for (let i = 0; i < nFloors; i++) {
    const space = ' '.repeat(nFloors - i - 1);
    const stars = '*'.repeat(i * 2 + 1);
    tower.push(space+stars+space);
  }
  return tower;
}
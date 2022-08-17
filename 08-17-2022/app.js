//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

const removeEveryOther = arr => arr.filter((el, i) => i % 2 == 0);

console.log(removeEveryOther([0,1,2,3,4]));
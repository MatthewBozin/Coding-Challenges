// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

//Parameters: array of integers, always one that appears odd number of times
//Returns: an integer, specifically the one that appears an odd number of times
//Examples: [1,2,3,2,3] => 1, [3] => 3
//Pseudocode: 

//reduce the array into an object
    //with a property for each unique integer in the array
    //property has value equal to the times integer appeared in the array
//get keys of object as an array
//loop through keys
    //return key whose value in the object is odd (as an integer)

const findOdd = (a) => {
  let counts = {};
  a.forEach(num => {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  });
  return +Object.keys(counts).find(key => counts[key] % 2 === 1);
}

console.log(findOdd([1,2,3,2,3]));

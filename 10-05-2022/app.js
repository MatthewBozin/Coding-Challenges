// Tea for two!
// Given a string or number write a function tea42 that takes as input a string or number and returns a string where every '2' charcter or digit has been replaced with a t.

//Parameters: a string or number
//Returns: a string
//Examples:
// tea42('coffee') //should return 'coffee'
// tea42('tea') //should return 'tea'
// tea42('2ea') //should return 'tea'
// tea42(9022) //should return '90tt'
// tea42(5676765) //should return '5676765'
// tea42('2u2u') //should return 'tutu'
//Pseudocode:
// run toString() on the input to make sure it is a string
// run replaceAll() on the input to replace all instances of '2' with 't'

const tea42Draft = (input) => {
  return input.toString().replaceAll('2', 't')
};

const tea42OneLine = input => input.toString().replaceAll('2', 't');

//node v10 sad face version

const tea42 = input => input.toString().replace (/2/g, 't');

console.log(tea42(22220))

module.exports = tea42
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). 
//It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics.

//Parameters: an array of three elements
//Returns: an array of three elements
//Examples: ["tail", "body", "head"] => ["head", "body", "tail"]
//Pseudocode: use destructuring to reorder the elements

const fixTheMeerkat = arr => [arr[2], arr[1], arr[0]];

console.log(fixTheMeerkat(["tail", "body", "head"]))
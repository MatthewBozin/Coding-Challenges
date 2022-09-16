//Complete the solution so that the function will break up camel casing, using a space between words.

//Parameters: a string, of any length, including ''
//Returns: a string
//Examples: "camelCasing" => "camel Casing", "identifier" => "identifier", "" => ""
//Pseudocode: 

//turn string into array
//array.reduce()
//check if letter is uppercase
//if so, add " "+letter to accumulator
//otherwise add letter to accumulator
//return accumulator

//FIRST PASS (FIRST TRYYYY)
const solution = (string) => {
    return [...string].reduce((newString, letter) => {
        return letter === letter.toUpperCase() ? newString+' '+letter : newString+letter
    }, '')
}

//REFACTOR
const solutionRefactor = string => [...string].reduce((newString, letter) => letter === letter.toUpperCase() ? newString+' '+letter : newString+letter, '');

console.log(solutionRefactor('camelCase'));


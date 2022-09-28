// Complete the solution so that it splits the string into pairs of two characters. 
// If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:
// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

const solution = (str) => {
    let arr = str.split('')
    let final = []
    for (let i = 0; i < arr.length; i += 2) {
        if (arr[i + 1]) {
            final.push(arr[i] + arr[i + 1])
        } else {
            final.push(arr[i] + '_')
        }
    }
    return final
}

function solution1(s){
   return (s + "_").match(/../g) || []
}

console.log(solution1('abcdef'))
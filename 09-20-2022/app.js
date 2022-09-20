// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

//BAD GRAMMAR, NEED EXTRA COMMA D':

//create array with strings that represent each of the different responses
//strings have template literals that autofill with data from the names array
//function returns the string at index = names array.length

const likesOriginal = (names) => {
    let templates = [
        `no one likes this`,
        `${names[0]} likes this`,
        `${names[0]} and ${names[1]} like this`,
        `${names[0]}, ${names[1]} and ${names[2]} like this`,
        `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    ]
    return templates[Math.min(4, names.length)]
}

//refactor

const likes = names => [
    `no one likes this`,
    `${names[0]} likes this`,
    `${names[0]} and ${names[1]} like this`,
    `${names[0]}, ${names[1]} and ${names[2]} like this`,
    `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
][Math.min(4, names.length)]

console.log(likes([]))
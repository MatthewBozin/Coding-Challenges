//Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

const removeChar = str => [...str].filter((el, i) => {
    if (i === 0 || i === str.length - 1) return false;
    return true;
}).join('');
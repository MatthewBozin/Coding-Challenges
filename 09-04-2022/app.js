// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

const getCount = str => [...str].reduce((t, c) => ['a','e','i','o','u'].includes(c) ? t + 1 : t, 0);

console.log(getCount("abracadabra"));
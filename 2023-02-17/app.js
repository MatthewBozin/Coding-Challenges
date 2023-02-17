//LONGEST COMMON PREFIX

// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// input is array of strings
// output is a string

// BEST SOLUTION
const longestCommonPrefixBest = (strs) => {
  if (strs === undefined || strs.length === 0) return "";
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev && next && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};

// ORIGINAL SOLUTION
const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return "";
  let commonPrefix = strs[0];
  for (i = 0; i < strs.length; i++) {
    let newPrefix = "";
    for (j = 0; j < strs[i].length; j++) {
      if (strs[i].charAt(j) !== commonPrefix[j]) break;
      newPrefix += strs[i].charAt(j);
    }
    if (newPrefix === "") return "";
    commonPrefix = newPrefix;
  }
  return commonPrefix;
};

// TEST CASES
console.assert(
  longestCommonPrefixBest([]) === "",
  "Returns empty string when given empty array."
);

console.assert(
  longestCommonPrefixBest(["flower", "flour", "flows"]) === "flo",
  "Returns common prefix from strings with common prefix."
);

console.assert(
  longestCommonPrefixBest(["dog", "cat", "horse"]) === "",
  "Returns empty string from array of strings without common prefix."
);

console.assert(
  longestCommonPrefixBest(["cir", "car"]) === "c",
  "Ignores common suffixes."
);

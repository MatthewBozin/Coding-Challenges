// At a job interview, you are challenged to write an algorithm to check if a given string, s, can be formed from two other strings, part1 and part2.
// The restriction is that the characters in part1 and part2 should be in the same order as in s.
// The interviewer gives you the following example and tells you to figure out the rest from the given test cases.
// For example:
// 'codewars' is a merge from 'cdw' and 'oears':
//     s:  c o d e w a r s   = codewars
// part1:  c   d   w         = cdw
// part2:    o   e   a r s   = oears

const isMerge = (s, part1, part2) => {
  if (part1.length + part2.length != s.length) return false;
    
  // Recursive function
  function recursive(pointer1, pointer2){
    if (pointer1 === part1.length && pointer2 === part2.length) return true;
    
    // Just part1 matches here so increment pointer1
    if (part1[pointer1] === s[pointer1 + pointer2] && part2[pointer2] != s[pointer1 + pointer2]) return recursive(pointer1 + 1, pointer2);
      
    // Just part2 matches here so increment pointer2
    else if (part1[pointer1] != s[pointer1 + pointer2] && part2[pointer2] === s[pointer1 + pointer2]) return recursive(pointer1, pointer2 + 1);
      
    // Both parts match here so try incrementing either pointer
    // to see if one of those solutions is correct
    else if (part1[pointer1] === s[pointer1 + pointer2] && part2[pointer2] === s[pointer1 + pointer2]) return recursive(pointer1 + 1, pointer2) || recursive(pointer1, pointer2 + 1);
      
    return false;
  }

  return recursive(0,0);
}

console.log(isMerge('xcyc', 'xc', 'cy'))

module.exports = isMerge
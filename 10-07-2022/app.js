// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
// If you want to know more: http://en.wikipedia.org/wiki/DNA
// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); 
// ou need to return the other complementary side. 
// DNA strand is never empty or there is no DNA at all (again, except for Haskell).
// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

//Parameters: a string
//Returns: a string
//Examples: "ATTGC" --> "TAACG", "GTAT" --> "CATA"
//Pseudocode:
// Gonna do this without regex
// create dict object, property for each symbol with value equal to the symbol's complement
// spread input string
// array.map(), replace symbol with its complement using the dict

const DNAStrand = (dna) => {
  const complements = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C'
  }
  return [...dna].map((symbol) => {
    return complements[symbol]
  }).join('')
}

//First tryyyyyyyyyyy

console.log(DNAStrand('ATTGC'))

module.exports = DNAStrand
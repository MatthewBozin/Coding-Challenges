//Given a sentence containing two or more words, return the equivalent of the sentence when capitalized. E.g
//capSentence('the tales of scotch!') // would return 'The Tales Of Scotch!'

const capSentenceOrig = (sentence) => {
    //split the sentence into an array of words
    //map over the array of words
    return sentence.split(' ').map((el) => {
        //replace the first letter of the word with its uppercase
        return el[0].toUpperCase() + el.slice(1)
    }).join(' ')
}

const capSentence = sentence => sentence.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ');

console.log(capSentence('the tales of scotch!')) //=> 'The Tales Of Scotch!'
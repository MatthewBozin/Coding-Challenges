// Hey @huntober2022 , today's question:
// This question is setting us up for a more complicated question next Monday! 
// Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"


const remove = (str) => {
    let prev = ''
    return str.split(' ').reduce((sentence, word) => {
        if (prev === word) return sentence;
        prev = word
        sentence.push(word)
        return sentence
    }, []).join(' ')
}

console.log(remove('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'))
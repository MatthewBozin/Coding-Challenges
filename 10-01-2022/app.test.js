const firstNonRepeatingLetter = require('./app')

test('Returns a non-repeating letter', () => {
    expect(firstNonRepeatingLetter('moonmen')).toBe('e')
})

test('Returns the first non-repeating letter', () => {
    expect(firstNonRepeatingLetter('stress')).toBe('t')
})

test('Returns empty string if empty string', () => {
    expect(firstNonRepeatingLetter('')).toBe('')
})

test('Returns empty string if all repeating letters', () => {
    expect(firstNonRepeatingLetter('')).toBe('')
})
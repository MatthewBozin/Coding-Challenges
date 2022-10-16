const vowelsCounter1 = require('./app')

test('Counts the vowels in a string', () => {
    expect(vowelsCounter1('anehizxcv')).toBe(3)
})
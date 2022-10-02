const scramble = require('./app')

test('Detects that first string contains all characters in second string', () => {
    expect(scramble('cedewaraaossoqqyt', 'codewars')).toBe(true)
})
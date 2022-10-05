const tea42 = require('./app')

test('Correctly interprets a string', () => {
    expect(tea42('2u2u')).toBe('tutu')
})

test('Correctly interprets a number', () => {
    expect(tea42(202020)).toBe('t0t0t0')
})
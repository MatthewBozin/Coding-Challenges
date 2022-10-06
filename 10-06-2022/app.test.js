const filterString = require('./app')

test('Returns only the numbers from input string', () => {
    expect(filterString('1z2z3z')).toBe(123)
})
const isMerge = require('./app')

test('Determines if string can be created from two other strings in given order', () => {
    expect(isMerge('Saker Tarsos', 'SkrTro', 'ae ass')).toBe(true)
})
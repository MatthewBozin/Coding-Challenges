const arrayDiff = require('./app')

test('Removes all instances of elements in B from A', () => {
    expect(arrayDiff([1,2,2,2,3],[2])).toStrictEqual([1,3])
})

test('Successfully handles empty string as argument A', () => {
    expect(arrayDiff([],[1,2])).toStrictEqual([])
})

test('Successfully handles empty string as argument B', () => {
    expect(arrayDiff([1,2],[])).toStrictEqual([1,2])
})
// Implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

const arrayDiffOrig = (arr1, arr2) => {
    const values = arr2.reduce((obj, val) => {
        if (obj[val]) return obj
        obj[val] = true
        return obj
    }, {})
    return arr1.filter((num) => {
        return !values[num]
    })
}

const arrayDiff2 = (arr1, arr2) => {
    const values = arr2.reduce((obj, val) => {
        if (obj[val]) return obj
        return obj[val] = true, obj
    }, {})
    return arr1.filter(num => !values[num])
}

const arrayDiff = (arr1, arr2) => {
    const values = arr2.reduce((obj, val) => {
        return obj[val] ? obj : obj[val] = true, obj
    }, {})
    return arr1.filter(num => !values[num])
}

console.log(arrayDiff([1,2,2,2,3],[2]), [1,3])
console.log(arrayDiff([], [4,5]), [], "a was [], b was [4,5]")
console.log(arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]")
console.log(arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []")
// Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

const sortedIndex = (arr, val) => {
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] == val) return i;
    if (arr[i] > val) return i;
  }
  return arr.length;
};

console.assert(sortedIndex([], 0) === 0, "Returns 0 if array is empty.");

console.assert(
  sortedIndex([1], 1) === 0,
  "Returns 0 if num is equal to first num in arr."
);

console.assert(
  sortedIndex([1, 2, 3, 4], 0) === 0,
  "Returns 0 if the given value is less than the first number in the array."
);

console.assert(
  sortedIndex([1, 2, 3, 4], 3) === 2,
  "Correctly returns the index of the duplicate number."
);

console.assert(
  sortedIndex([1, 3, 4], 2) === 1,
  "Correctly returns the index a given value would be."
);

console.assert(
  sortedIndex([1, 3, 4], 5) === 3,
  "Correctly returns the index a given value would be if it is greater than any number in the array."
);

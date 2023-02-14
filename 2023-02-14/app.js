// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result.
// It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

const removeOccurrences = (nums, val) => {
  let k = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

console.assert(
  removeOccurrences([0, 1, 2, 3], 1) == 3,
  "Correctly removes occurrences of the given value."
);

console.assert(
  removeOccurrences([2, 2, 2, 2], 2) == 0,
  "Removes all numbers when all numbers in array are equal to the given value."
);

console.assert(
  removeOccurrences([0, 1, 2, 3], 4) == 4,
  "Removes nothing if given value isn't in nums."
);

console.assert(
  removeOccurrences([], 1) == 0,
  "Returns 0 if given empty array."
);

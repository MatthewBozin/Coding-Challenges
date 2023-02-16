// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.
// The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums.
// More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.
// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Input: array of numbers
// Output: integer representing the amount of elements remaining after removing duplicates

const removeSortedDuplicates = (nums) => {
  if (!nums || !nums.length) return 0;
  let uniques = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[uniques]) {
      uniques += 1;
      nums[uniques] = nums[i];
    }
  }
  return ++uniques;
};

console.assert(
  removeSortedDuplicates(undefined) === 0,
  "Returns 0 when input is undefined."
);

console.assert(
  removeSortedDuplicates([]) === 0,
  "Returns 0 when input is empty array."
);

console.assert(
  removeSortedDuplicates([1, 2, 3]) === 3,
  "Returns array length when input contains no duplicates."
);

console.assert(
  removeSortedDuplicates([1, 2, 2, 2, 3, 3]) === 3,
  "Correctly filters out duplicates."
);

// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order,
// and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements
// that should be merged, and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.

const merge = (nums1, m, nums2, n) => {
  let index1 = m - 1;
  let index2 = n - 1;
  for (let i = n + m - 1; i >= 0 && index2 >= 0; i--) {
    const num1 = nums1[index1];
    const num2 = nums2[index2];
    if (index1 >= 0 && num1 > num2) {
      nums1[i] = num1;
      index1--;
    } else {
      nums1[i] = num2;
      index2--;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3), [1, 2, 2, 3, 5, 6]);
console.log(merge([1], 1, [], 0), [1]);
console.log(merge([0], 0, [1], 1), [1]);

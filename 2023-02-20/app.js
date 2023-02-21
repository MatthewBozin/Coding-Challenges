// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in left-to-right order.
// The large integer does not contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

const plusOne = (a) => {
  for (i = a.length - 1; i >= 0; i--) {
    if (a[i] !== 9) {
      a[i]++;
      return a;
    }
    a[i] = 0;
    if (i === 0) {
      a.unshift(1);
      return a;
    }
  }
};

console.log(plusOne([1, 2, 3]), [1, 2, 4]);

console.log(plusOne([9]), [1, 0]);

console.log(plusOne([9, 8, 9, 9, 9]), [9, 9, 0, 0, 0]);

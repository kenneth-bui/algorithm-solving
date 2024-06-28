/**
 * Problem title: Max Switching Slices
 * 
 * Problem description:
    Given an array, find the length of the longest switching slice. 
    We call an array switching if all numbers in even positions are equal and all numbers in odd positions are equal. For example: [3, -7,3, -7, 3] and [4, 4, 4] are switching, but [5, 5, 4, 5, 4] and [-3, 2, 3] are not switching. 
    What is the length of the longest switching slice (continuous fragment) in a given array A?
    Write a function: function solution (A)
    that, given an array A consisting of N integers, returns the length of the longest switching slice in A. Te Examples: 1. Given A = [3, 2, 3, 2, 3], the function should return 5, because the whole array is switching.
    Examples:
    A = [3,2,3,2,3], function should return 5, because the whole array is switching.
    A = [7,4,-2,4,-2,-9], function should return 4. The longest switching slice is [4,-2,4,-2].
    A = [7,-5,-5,-5,7,-1,7], function should return 3. There are two switching slice of equal length: [-5,-5,-5] and [7,-1,7]
    A = [4], function should return 1, A single-element slice is also a switching slices.

    Write an efficient algorithm for the following assumption:
    -	N is an integer within the range [1…100,00];
    -	Each element of array A is an integer within the range [-1,000,000,000…1,000,000,000].
 */

/**
 * Return the length of the longest switching slice in an array
 * @param {Array} A
 */
function Solution(A) {
  if (A.length <= 1) return A.length;
  let C = [A[0], A[1]]; // to store only 2 values (odd and even)
  let maxLength = 0,
    B = [A[0], A[1]];
  for (let i = 2; i < A.length; i++) {
    if (A[i] !== C[i % 2]) {
      C[i % 2] = A[i];
      if (maxLength < B.length) maxLength = B.length;
      B = [A[i - 1], A[i]];
    } else B.push(A[i]);
  }
  return maxLength < B.length ? B.length : maxLength;
}

console.log(Solution([3, -7, 3, -7, 3]));
console.log(Solution([4, 4, 4]));
console.log(Solution([5, 5, 4, 5, 4]));
console.log(Solution([-3, 2, 3]));
console.log(Solution([3, 2, 3, 2, 3]));
console.log(Solution([7, 4, -2, 4, -2, -9]));
console.log(Solution([7, -5, -5, -5, 7, -1, 7]));
console.log(Solution([4]));
console.log(Solution([]));
console.log(Solution([2, 4]));

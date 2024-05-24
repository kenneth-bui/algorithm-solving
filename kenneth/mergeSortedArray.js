// https://leetcode.com/problems/merge-sorted-array/description/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let index = m-- + n-- - 1;
  while (n >= 0) {
    nums1[index--] = m >= 0 && nums1[m] > nums2[n] ? nums1[m--] : nums2[n--];
  }
};

// ================ DEMO ==================
let nums1 = [1, 2, 3, 0, 0, 0],
  nums2 = [2, 5, 6];
merge(nums1, 3, nums2, 3);
console.log(
  `nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3 => arr = [${nums1}]`
);

let nums3 = [1],
  nums4 = [];
merge(nums3, 1, nums4, 0);
console.log(`nums1 = [1], m = 1, nums2 = [], n = 0 => arr = [${nums3}]`);

let nums5 = [0],
  nums6 = [1];
merge(nums5, 0, nums6, 1);
console.log(`nums1 = [0], m = 0, nums2 = [1], n = 1 => arr = [${nums5}]`);

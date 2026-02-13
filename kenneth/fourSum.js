/**
 * 4Sum: Find all unique quadruplets [a, b, c, d] that sum to target.
 *
 * Approach: Sort + Two Pointers (extends 3Sum idea)
 * 1. Sort the array so we can use two-pointer technique
 * 2. Fix first two elements (i, j), then search for (left, right) with two pointers
 * 3. If sum === target: push result, skip duplicates for left/right, then advance both
 * 4. If sum > target: move right inward (need smaller sum)
 * 5. If sum < target: move left inward (need larger sum)
 *
 * Duplicate handling: Skip repeated values at i, j, left, right to avoid duplicate quadruplets
 *
 * @param {number[]} nums - Array of integers (may contain duplicates)
 * @param {number} target - Target sum for quadruplets
 * @return {number[][]} - Array of unique quadruplets [a, b, c, d] where a+b+c+d === target
 *
 * Time: O(n³) | Space: O(1) excluding output
 */
function fourSum(nums, target) {
    if (nums.length < 4) return [];

    let results = [], n = nums.length;

    nums.sort((a, b) => a - b);

    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;

            let left = j + 1, right = n - 1;

            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {
                    results.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if (sum > target) right--;
                else left++;
            }

        }
    }

    return results;
}

module.exports = fourSum;

// Example tests for direct execution
if (require.main === module) {
    console.log("Example 1:", fourSum([1, 0, -1, 0, -2, 2], 0));
    console.log("Example 2:", fourSum([2, 2, 2, 2, 2], 8));
}

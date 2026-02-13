/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search_answer_debug(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    console.log(`\nSearching for target: ${target} in [${nums}]`);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        console.log(`Loop Start: left=${left}, right=${right}, mid=${mid}, nums[mid]=${nums[mid]}`);

        if (nums[mid] === target) {
            console.log(`>> Found target ${target} at index ${mid}`);
            return mid;
        }

        // Identify which half is sorted
        if (nums[left] <= nums[mid]) {
            // Left half is sorted
            console.log(`   Left half [${left}...${mid}] is sorted (nums[left]=${nums[left]} <= nums[mid]=${nums[mid]})`);
            if (nums[left] <= target && target < nums[mid]) {
                console.log(`   Target ${target} is within [${nums[left]}, ${nums[mid]}). Moving right to ${mid - 1}`);
                right = mid - 1;
            } else {
                console.log(`   Target ${target} NOT in left half. Moving left to ${mid + 1}`);
                left = mid + 1;
            }
        } else {
            // Right half is sorted
            console.log(`   Right half [${mid}...${right}] is sorted (nums[mid]=${nums[mid]} < nums[right]=${nums[right]})`);
            if (nums[mid] < target && target <= nums[right]) {
                console.log(`   Target ${target} is within (${nums[mid]}, ${nums[right]}]. Moving left to ${mid + 1}`);
                left = mid + 1;
            } else {
                console.log(`   Target ${target} NOT in right half. Moving right to ${mid - 1}`);
                right = mid - 1;
            }
        }
    }

    console.log(`>> Target ${target} not found.`);
    return -1;
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */
function search(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let m = (l + r) >> 1; // same as Math.floor((l + r) / 2)
        if (nums[m] === target) return m;
        if (nums[l] <= nums[m]) {
            if (nums[l] <= target && target < nums[m]) r = m - 1;
            else l = m + 1;
        } else {
            if (nums[m] < target && target <= nums[r]) l = m + 1;
            else r = m - 1;
        }
    }

    return -1;
}

// Another solution.
/** @param {number[]} nums @param {number} target @returns {number} */
function search2(nums, target) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        const m = (l + r) >> 1; // Math.floor((l + r) / 2) OR (l + r) >>> 1 when non-negative 
        if (nums[m] === target) return m;
        const goLeft = (nums[l] <= nums[m] && nums[l] <= target && target < nums[m]) ||
            (nums[l] > nums[m] && !(nums[m] < target || target <= nums[r]));
        if (goLeft) r = m - 1;
        else l = m + 1;
    }
    return -1;
}

module.exports = search;

// Example tests for direct execution
if (require.main === module) {
    console.log("search:", search([4, 5, 6, 7, 0, 1, 2], 0), search([4, 5, 6, 7, 0, 1, 2], 3), search([1], 0));
    console.log("search2:", search2([4, 5, 6, 7, 0, 1, 2], 0), search2([4, 5, 6, 7, 0, 1, 2], 3), search2([1], 0));
}

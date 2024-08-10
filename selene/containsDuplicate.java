package selene;

import java.util.Arrays;

public class containsDuplicate {
	public static void main(String[] args) {
		int[] nums1 = { 1, 2, 3, 1 }; // return true
        int[] nums2 = { 1, 2, 3, 4}; // return false
        int[] nums3 = { 1, 1, 1, 3, 3, 3, 4, 3, 2, 4, 2 }; // return true

        System.out.println(solution(nums1));
        System.out.println(solution(nums2));
        System.out.println(solution(nums3));
	}

	public static boolean solution(int[] nums) {
		Arrays.sort(nums);
		for (int i = 1; i < nums.length; i++) {
			if (nums[i] == nums[i - 1])
				return true;
		}
		return false;
	}
}

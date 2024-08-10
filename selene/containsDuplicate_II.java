package selene;

import java.util.HashSet;

public class containsDuplicate_II {
	public static void main(String[] args) {
        int[] nums1 = {1, 2, 3, 1};  int k1 = 3; // return true
        int[] nums2 = {1, 0, 1, 1};  int k2 = 1; // return true
        int[] nums3 = {1, 2, 3, 1, 2, 3};  int k3 = 2; // return false

        System.out.println(solution(nums1, k1));
        System.out.println(solution(nums2, k2));
        System.out.println(solution(nums3, k3));
    }

	public static boolean solution(int[] nums, int k) {
		if(nums == null || nums.length < 2 || k == 0){
			return false;
		}
		int i=0;
		HashSet<Integer> set = new HashSet<Integer>();
		for(int j = 0; j < nums.length; j++){
			if(!set.add(nums[j])){
				return true;
			}
			if(set.size() >= k+1){
				set.remove(nums[i++]);
			}
		}
		return false;
	}
}

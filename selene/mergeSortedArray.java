package selene;

import java.util.Arrays;

public class mergeSortedArray {
    public static void main(String[] args){
        int [] nums1 = {1,2,3,0,0,0,};
        int [] nums2 = {2,5,6};

        solution1_usingTwoPointer(nums1, 3, nums2, 3);
        solution2_usingSort(nums1, 3, nums2, 3);
    }

    public static void solution1_usingTwoPointer(int[] nums1, int m, int[] nums2, int n){
        int i = m-1, j = n-1;
        int k = m + n -1;
        
        while (i >= 0 && j >=0){
            if(nums1[i] > nums2[j]){
                nums1[k--] = nums1[i--];
            } else {
                nums1[k--] = nums2[j--];
            }
        }

        while (j >= 0){
            nums1[k--] = nums2[j--];
        }
    }

    public static void solution2_usingSort(int[] nums1, int m, int[] nums2, int n){
        for(int j=0, i=m; j < n; j++){
            nums1[i] = nums2[j];
            i++;
        }
        Arrays.sort(nums1);
    }
}

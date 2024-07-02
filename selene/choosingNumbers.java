package selene;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class choosingNumbers {
	public static void main(String[] args) {
        int [] A = {4,7,1,5,3};
        int [] B = {12,12,12,15,10};
        int [] C = {18,26,18,24,24,20,22};
        int [] D = {18,29};
        int [] E = {2,2,3,9};
		System.out.println(solution(A));
		System.out.println(solution(B));
		System.out.println(solution(C));
		System.out.println(solution(D));
		System.out.println(solution(E));
    }

	public static int solution(int[] A) {
		Map<Integer, Map<Integer, Integer>> map = new HashMap<Integer, Map<Integer, Integer>>();
		int maxNum = 2;
		Arrays.sort(A);

		for (int i = 0; i < A.length; i++) {
			for(int j = i+1; j < A.length; j++) {
				int rangeBetweenTwoNumbers = A[j] - A[i];
				Map<Integer, Integer> tempArray;
				if(map.containsKey(rangeBetweenTwoNumbers)){
					tempArray = map.get(rangeBetweenTwoNumbers);
					if(tempArray.containsKey(i)){
						tempArray.put(j, tempArray.get(i) + 1);
					} else {
						tempArray.put(j, 2);
					}
				}else {
					tempArray = new HashMap<Integer, Integer>();
                    tempArray.put(j, 2);
				}
				map.put(rangeBetweenTwoNumbers, tempArray);
				maxNum = Math.max(maxNum, tempArray.get(j));
			}
		}
        return maxNum;
    }

}

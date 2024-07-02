package selene;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class diceRoll{
    public static void main(String [] args){
        int [] A = {3,2,4,3}; int F = 2; int M = 4;
        int [] A1 = {1,5,6}; int F1 = 4; int M1 = 3;
        int [] A2 = {1,2,3,4,}; int F2 = 4; int M2 = 6;
        int [] A3 = {6,1}; int F3 = 1; int M3 = 1;
        System.out.println(solution(A, F, M));
        System.out.println(solution(A1, F1, M1));
        System.out.println(solution(A2, F2, M2));
        System.out.println(solution(A3, F3, M3));

    }

    public static List<Integer> solution(int[] A, int F, int M) {
        int totalSum = M * (A.length + F);
        int knownSum = Arrays.stream(A).reduce(Integer::sum).getAsInt();
        int unknownSum = totalSum - knownSum;

        List<Integer> answer = new ArrayList<>();
//        if(unknownSum < F || unknownSum > 6 * F) {
//            answer.add(0);
//            return answer;
//        }
//        while(F > 0){
//            if(unknownSum >= 6){
//                answer.add(6);
//                unknownSum -= 6;
//            } else {
//                answer.add(unknownSum);
//                unknownSum = 0;
//            }
//            F--;
//        }
        return answer;
    }

}
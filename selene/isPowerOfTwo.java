package selene;

public class isPowerOfTwo {
    public static void main (String [] args){
        System.out.println(solution(0));
        System.out.println(solution(1));
        System.out.println(solution(16));
        System.out.println(solution(3));
    }

    public static boolean solution (int n){
        if(n==1) return true;

        //return false if n is not 1 or odd
        if(n < 1 || n % 2 != 0) return false;

        //use recursive
        return solution(n/2);
    }
}

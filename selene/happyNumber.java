package selene;

public class happyNumber{
   public static void main(String[] args) {
        System.out.println(isHappyNumber(7));
        System.out.println(isHappyNumber(19));
        System.out.println(isHappyNumber(2));
        System.out.println(isHappyNumber(49));
   }

   public static boolean isHappyNumber(int n){
    while (n >= 10) {
        int sum = 0;
        while (n > 0) {
            int remain = n % 10;
            sum += remain * remain;
            n/=10;
        }
        if(sum == 1) return true;
        n = sum;
    }
    return n == 1 || n == 7;
   }
}

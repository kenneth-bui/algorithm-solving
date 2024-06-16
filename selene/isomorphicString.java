package selene;

public class isomorphicString {
    public static void main(String[] args){
        System.out.println(solution("egg", "add"));
        System.out.println(solution("foo", "bar"));
        System.out.println(solution("paper", "title"));
        System.out.println(solution("ba", "baa"));
        System.out.println(solution("pao", "tei"));
        System.out.println(solution("noo", "noo"));
    }

    public static boolean solution(String s, String t){
        // return false when length of two string are not match
        if(s.length() != t.length()) return false;

        int [] characterS = new int[256];
        int [] characterT = new int[256];

        for(int i=0; i<s.length(); i++){
            if(characterS[s.charAt(i)] != characterT[t.charAt(i)]) return false;
            characterS[s.charAt(i)] = i + 1;
            characterT[t.charAt(i)] = i +1;
        }
        return true;
    }
}

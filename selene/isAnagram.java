package selene;

import java.util.Arrays;

public class isAnagram {
	public static void main(String[] args){
		System.out.println(solution("listen", "silent"));
		System.out.println(solution("hello", "world"));
		System.out.println(solution("A man, a plan, a canal: Panama", "A man, a plan, a canal: Panama"));
		System.out.println(solution("No lemon, no melon", "I am lemon, I am melon"));
		System.out.println(solution("Able, was I saw Elba", "Was I saw elba"));
		System.out.println(solution("Listen!", "Silent!"));
		System.out.println(solution("Able", "bale"));
		System.out.println(solution("Listen", "Silent"));
	}

	public static boolean solution(String s, String t){
		char[] input_tChars = t.toCharArray();
		char[] input_sChars = s.toCharArray();

		Arrays.sort(input_sChars);
		Arrays.sort(input_tChars);

		return Arrays.equals(input_sChars, input_tChars);
	}
}

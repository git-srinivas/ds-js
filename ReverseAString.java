public class Solution {
	public String reverseWords(String a) {
        a = a.trim();
        java.util.List<String> myList = new ArrayList<String>(Arrays.asList(a.split(" ")));
     Collections.reverse(myList);
        return  String.join(" ", myList);
	}
}

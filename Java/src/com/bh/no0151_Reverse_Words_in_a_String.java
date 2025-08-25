package com.bh;

public class no0151_Reverse_Words_in_a_String {
    public String reverseWords(String s) {
        // Trim leading and trailing spaces and split the string by spaces
        String[] words = s.trim().split("\\s+");

        // Use a StringBuilder to construct the reversed string
        StringBuilder reversed = new StringBuilder();

        // Iterate over the words array in reverse order
        for (int i = words.length - 1; i >= 0; i--) {
            reversed.append(words[i]);
            if (i != 0) {
                reversed.append(" "); // Add a space between words
            }
        }

        return reversed.toString();
    }

    public static void main(String[] args) {
        no0151_Reverse_Words_in_a_String solution = new no0151_Reverse_Words_in_a_String();

        // Test case 1
        String s1 = "the sky is blue";
        System.out.println(solution.reverseWords(s1)); // Expected: "blue is sky the"

        // Test case 2
        String s2 = "  hello world  ";
        System.out.println(solution.reverseWords(s2)); // Expected: "world hello"

        // Test case 3
        String s3 = "a good   example";
        System.out.println(solution.reverseWords(s3)); // Expected: "example good a"
    }
}

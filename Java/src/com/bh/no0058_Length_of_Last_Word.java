package com.bh;

public class no0058_Length_of_Last_Word {

    static class Solution {
        public int lengthOfLastWord(String s) {
            // Start from the end of the string
            int i = s.length() - 1;

            // Skip trailing spaces
            while (i >= 0 && s.charAt(i) == ' ') {
                i--;
            }

            // Count the length of the last word
            int length = 0;
            while (i >= 0 && s.charAt(i) != ' ') {
                length++;
                i--;
            }

            return length;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1
        String test1 = "Hello World";
        System.out.println("Input: \"" + test1 + "\"");
        System.out.println("Output: " + solution.lengthOfLastWord(test1));
        System.out.println("Expected: 5\n");

        // Test case 2
        String test2 = "   fly me   to   the moon  ";
        System.out.println("Input: \"" + test2 + "\"");
        System.out.println("Output: " + solution.lengthOfLastWord(test2));
        System.out.println("Expected: 4\n");

        // Test case 3
        String test3 = "luffy is still joyboy";
        System.out.println("Input: \"" + test3 + "\"");
        System.out.println("Output: " + solution.lengthOfLastWord(test3));
        System.out.println("Expected: 6\n");

        // Additional test cases
        String test4 = "a";
        System.out.println("Input: \"" + test4 + "\"");
        System.out.println("Output: " + solution.lengthOfLastWord(test4));
        System.out.println("Expected: 1\n");

        String test5 = " a ";
        System.out.println("Input: \"" + test5 + "\"");
        System.out.println("Output: " + solution.lengthOfLastWord(test5));
        System.out.println("Expected: 1");
    }
}

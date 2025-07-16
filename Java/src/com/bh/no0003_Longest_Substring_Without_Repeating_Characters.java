

package com.bh;

import java.util.HashMap;

public class no0003_Longest_Substring_Without_Repeating_Characters {

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1
        String s1 = "abcabcbb";
        int result1 = solution.lengthOfLongestSubstring(s1);
        System.out.println("Example 1:");
        System.out.println("Input: s = \"abcabcbb\"");
        System.out.println("Output: " + result1);
        System.out.println("Expected: 3");
        System.out.println("Test 1 " + (result1 == 3 ? "PASSED" : "FAILED"));
        System.out.println();

        // Example 2
        String s2 = "bbbbb";
        int result2 = solution.lengthOfLongestSubstring(s2);
        System.out.println("Example 2:");
        System.out.println("Input: s = \"bbbbb\"");
        System.out.println("Output: " + result2);
        System.out.println("Expected: 1");
        System.out.println("Test 2 " + (result2 == 1 ? "PASSED" : "FAILED"));
        System.out.println();

        // Example 3
        String s3 = "pwwkew";
        int result3 = solution.lengthOfLongestSubstring(s3);
        System.out.println("Example 3:");
        System.out.println("Input: s = \"pwwkew\"");
        System.out.println("Output: " + result3);
        System.out.println("Expected: 3");
        System.out.println("Test 3 " + (result3 == 3 ? "PASSED" : "FAILED"));
        System.out.println();

        // Additional test case: empty string
        String s4 = "";
        int result4 = solution.lengthOfLongestSubstring(s4);
        System.out.println("Test 4:");
        System.out.println("Input: s = \"\"");
        System.out.println("Output: " + result4);
        System.out.println("Expected: 0");
        System.out.println("Test 4 " + (result4 == 0 ? "PASSED" : "FAILED"));
    }

    static class Solution {
        /**
         * Solution Idea:
         * Use the sliding window technique with a HashMap to keep track of the last seen index of each character.
         * - The window is defined by [left, right].
         * - As we iterate with 'right', if we see a duplicate character (already in the window),
         *   we move 'left' to the right of the previous occurrence of that character.
         * - For each step, update the max length.
         *
         * Steps:
         * 1. Initialize a HashMap to store the last index of each character.
         * 2. Use two pointers: 'left' (start of window) and 'right' (end of window).
         * 3. For each character at 'right':
         *    - If it has been seen and its last index >= left, move 'left' to last index + 1 (to remove duplicate).
         *    - Update the character's last index in the map.
         *    - Update maxLen as the window size (right - left + 1).
         * 4. Return maxLen.
         */
        public int lengthOfLongestSubstring(String s) {
            HashMap<Character, Integer> map = new HashMap<>();
            int maxLen = 0;
            int left = 0;
            for (int right = 0; right < s.length(); right++) {
                char c = s.charAt(right);
                // If character is already in the window, move 'left' to right of previous occurrence
                if (map.containsKey(c) && map.get(c) >= left) {
                    left = map.get(c) + 1;
                }
                // Update the last seen index of the character
                map.put(c, right);
                // Update the maximum length found so far
                maxLen = Math.max(maxLen, right - left + 1);
            }
            return maxLen;
        }
    }
}



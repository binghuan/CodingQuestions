


package com.bh;

import java.util.HashMap;

/**
 * LeetCode 3: Longest Substring Without Repeating Characters
 *
 * Problem:
 * Given a string s, find the length of the longest substring without repeating characters.
 *
 * Example:
 *   Input: s = "abcabcbb"
 *   Output: 3
 *   Explanation: The answer is "abc", with the length of 3.
 *
 * Approach:
 * Use the sliding window technique with a HashMap to track the last seen index of each character.
 * Move the left pointer to the right of the previous occurrence when a duplicate is found.
 * For each step, update the max length.
 *
 * Time Complexity: O(n), where n is the length of the string.
 * Space Complexity: O(min(n, m)), where m is the size of the character set.
 */
public class no0003_Longest_Substring_Without_Repeating_Characters {


    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1: Standard example
        String s1 = "abcabcbb";
        int result1 = solution.lengthOfLongestSubstring(s1);
        System.out.println("Example 1:");
        System.out.println("Input: s = \"abcabcbb\"");
        System.out.println("Output: " + result1);
        System.out.println("Expected: 3");
        System.out.println("Test 1 " + (result1 == 3 ? "PASSED" : "FAILED"));
        System.out.println();

        // Test case 2: All characters the same
        String s2 = "bbbbb";
        int result2 = solution.lengthOfLongestSubstring(s2);
        System.out.println("Example 2:");
        System.out.println("Input: s = \"bbbbb\"");
        System.out.println("Output: " + result2);
        System.out.println("Expected: 1");
        System.out.println("Test 2 " + (result2 == 1 ? "PASSED" : "FAILED"));
        System.out.println();

        // Test case 3: Substring in the middle
        String s3 = "pwwkew";
        int result3 = solution.lengthOfLongestSubstring(s3);
        System.out.println("Example 3:");
        System.out.println("Input: s = \"pwwkew\"");
        System.out.println("Output: " + result3);
        System.out.println("Expected: 3");
        System.out.println("Test 3 " + (result3 == 3 ? "PASSED" : "FAILED"));
        System.out.println();

        // Test case 4: Empty string
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
         * Returns the length of the longest substring without repeating characters.
         *
         * Approach:
         * - Use a sliding window with two pointers and a HashMap to track the last seen index of each character.
         * - Move the left pointer to the right of the previous occurrence when a duplicate is found.
         * - Update the maximum length for each window.
         *
         * @param s input string
         * @return length of the longest substring without repeating characters
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




package com.bh;

import java.util.Arrays;

/**
 * LeetCode 242: Valid Anagram
 * Given two strings s and t, return true if t is an anagram of s, and false otherwise.
 */
public class no0242_Valid_Anagram {
    static class Solution {
        public boolean isAnagram(String s, String t) {
            if (s.length() != t.length()) return false;
            int[] count = new int[26];
            for (int i = 0; i < s.length(); i++) {
                count[s.charAt(i) - 'a']++;
                count[t.charAt(i) - 'a']--;
            }
            for (int c : count) {
                if (c != 0) return false;
            }
            return true;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[][] testCases = {
            {"anagram", "nagaram"},
            {"rat", "car"},
            {"a", "a"},
            {"", ""},
            {"abc", "cba"},
            {"ab", "a"}
        };
        boolean[] expected = {true, false, true, true, true, false};
        for (int i = 0; i < testCases.length; i++) {
            boolean result = solution.isAnagram(testCases[i][0], testCases[i][1]);
            System.out.println("s: '" + testCases[i][0] + "', t: '" + testCases[i][1] + "' | Output: " + result + " | Expected: " + expected[i]);
        }
    }
}


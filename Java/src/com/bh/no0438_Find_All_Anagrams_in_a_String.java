package com.bh;

import java.util.*;

/**
 * LeetCode 438: Find All Anagrams in a String
 * Given two strings s and p, return an array of all the start indices of p's anagrams in s.
 * 
 * Solution Approach:
 * Use sliding window technique with character frequency counting.
 * 1. Count frequency of characters in p
 * 2. Use a sliding window of size p.length() to traverse s
 * 3. For each window, check if character frequencies match
 * 
 * Time Complexity: O(s.length())
 * Space Complexity: O(1) - since we only use arrays of size 26 for lowercase letters
 */
public class no0438_Find_All_Anagrams_in_a_String {
    static class Solution {
        /**
         * Returns a list of starting indices where anagrams of p are found in s.
         * @param s the string to search in
         * @param p the pattern string
         * @return list of starting indices
         */
        public List<Integer> findAnagrams(String s, String p) {
            List<Integer> result = new ArrayList<>();
            
            if (s == null || p == null || s.length() < p.length()) {
                return result;
            }
            
            // Count frequency of characters in p
            int[] pCount = new int[26];
            for (char c : p.toCharArray()) {
                pCount[c - 'a']++;
            }
            
            // Sliding window approach
            int[] windowCount = new int[26];
            int windowSize = p.length();
            
            // Initialize the first window
            for (int i = 0; i < windowSize; i++) {
                windowCount[s.charAt(i) - 'a']++;
            }
            
            // Check if first window is an anagram
            if (Arrays.equals(pCount, windowCount)) {
                result.add(0);
            }
            
            // Slide the window
            for (int i = windowSize; i < s.length(); i++) {
                // Add new character to window
                windowCount[s.charAt(i) - 'a']++;
                
                // Remove character that's leaving the window
                windowCount[s.charAt(i - windowSize) - 'a']--;
                
                // Check if current window is an anagram
                if (Arrays.equals(pCount, windowCount)) {
                    result.add(i - windowSize + 1);
                }
            }
            
            return result;
        }
        
        /**
         * Alternative solution using HashMap (more general approach)
         */
        public List<Integer> findAnagrams_HashMap(String s, String p) {
            List<Integer> result = new ArrayList<>();
            
            if (s == null || p == null || s.length() < p.length()) {
                return result;
            }
            
            Map<Character, Integer> pMap = new HashMap<>();
            for (char c : p.toCharArray()) {
                pMap.put(c, pMap.getOrDefault(c, 0) + 1);
            }
            
            Map<Character, Integer> windowMap = new HashMap<>();
            int windowSize = p.length();
            
            // Initialize first window
            for (int i = 0; i < windowSize; i++) {
                char c = s.charAt(i);
                windowMap.put(c, windowMap.getOrDefault(c, 0) + 1);
            }
            
            if (windowMap.equals(pMap)) {
                result.add(0);
            }
            
            // Slide the window
            for (int i = windowSize; i < s.length(); i++) {
                // Add new character
                char newChar = s.charAt(i);
                windowMap.put(newChar, windowMap.getOrDefault(newChar, 0) + 1);
                
                // Remove old character
                char oldChar = s.charAt(i - windowSize);
                windowMap.put(oldChar, windowMap.get(oldChar) - 1);
                if (windowMap.get(oldChar) == 0) {
                    windowMap.remove(oldChar);
                }
                
                if (windowMap.equals(pMap)) {
                    result.add(i - windowSize + 1);
                }
            }
            
            return result;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test cases
        String[][] testCases = {
            {"cbaebabacd", "abc"},
            {"abab", "ab"},
            {"aa", "bb"},
            {"aab", "ab"},
            {"aaaaaaaaaa", "aaaa"}
        };
        
        int[][] expected = {
            {0, 6},
            {0, 1, 2},
            {},
            {1},
            {0, 1, 2, 3, 4, 5, 6}
        };
        
        for (int i = 0; i < testCases.length; i++) {
            String s = testCases[i][0];
            String p = testCases[i][1];
            
            List<Integer> result = solution.findAnagrams(s, p);
            List<Integer> resultHashMap = solution.findAnagrams_HashMap(s, p);
            
            System.out.println("Test " + (i + 1) + ":");
            System.out.println("  s = \"" + s + "\", p = \"" + p + "\"");
            System.out.println("  Array result: " + result);
            System.out.println("  HashMap result: " + resultHashMap);
            System.out.println("  Expected: " + Arrays.toString(expected[i]));
            System.out.println();
        }
    }
}

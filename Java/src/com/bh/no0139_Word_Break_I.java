package com.bh;

import java.util.*;

/**
 * LeetCode 139: Word Break
 * Given a string s and a dictionary of strings wordDict,
 * return true if s can be segmented into a space-separated sequence of one or more dictionary words.
 *
 * Time Complexity:
 * Let n = s.length(), m = the maximum length of a word in wordDict.
 * The outer loop runs n times, and the inner loop runs up to n times for each i (from 0 to i).
 * For each substring check, it takes O(m) time (since substring and set lookup are O(m)).
 * So the overall time complexity is O(n^2 * m).
 *
 * Space Complexity:
 * O(n) for the dp array, plus O(total characters in wordDict) for the set.
 */
public class no0139_Word_Break_I {
    static class Solution {
        public boolean wordBreak(String s, List<String> wordDict) {
            Set<String> wordSet = new HashSet<>(wordDict);
            boolean[] dp = new boolean[s.length() + 1];
            dp[0] = true;
            for (int i = 1; i <= s.length(); i++) {
                for (int j = 0; j < i; j++) {
                    if (dp[j] && wordSet.contains(s.substring(j, i))) {
                        dp[i] = true;
                        break;
                    }
                }
            }
            return dp[s.length()];
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        String[] testStrings = {"leetcode", "applepenapple", "catsandog", "aaaaaaa"};
        List<List<String>> testDicts = Arrays.asList(Arrays.asList("leet", "code"), Arrays.asList("apple", "pen"), Arrays.asList("cats", "dog", "sand", "and", "cat"), Arrays.asList("aaaa", "aaa"));
        boolean[] expected = {true, true, false, true};
        for (int i = 0; i < testStrings.length; i++) {
            boolean result = solution.wordBreak(testStrings[i], testDicts.get(i));
            System.out.println("s: '" + testStrings[i] + "', wordDict: " + testDicts.get(i) + " | Output: " + result + " | Expected: " + expected[i]);
        }
    }
}

package com.bh;

import java.util.Arrays;

/**
 * LeetCode 300: Longest Increasing Subsequence
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * 
 * Solution Approach:
 * 1. Dynamic Programming approach: O(n^2) time complexity
 * 2. Binary Search approach: O(n log n) time complexity (implemented here)
 * 
 * Time Complexity: O(n log n)
 * Space Complexity: O(n)
 */
public class no0300_Longest_Increasing_Subsequence {
    static class Solution {
        /**
         * Returns the length of the longest increasing subsequence using binary search approach.
         * @param nums input array
         * @return length of longest increasing subsequence
         */
        public int lengthOfLIS(int[] nums) {
            if (nums == null || nums.length == 0) return 0;
            
            // tails[i] stores the smallest tail of all increasing subsequences of length i+1
            int[] tails = new int[nums.length];
            int size = 0;
            
            for (int num : nums) {
                // Binary search to find the position to insert/replace
                int left = 0, right = size;
                while (left < right) {
                    int mid = left + (right - left) / 2;
                    if (tails[mid] < num) {
                        left = mid + 1;
                    } else {
                        right = mid;
                    }
                }
                // If left == size, it means num is larger than all elements in tails
                // So we extend the subsequence
                tails[left] = num;
                if (left == size) size++;
            }
            
            return size;
        }
        
        /**
         * Alternative DP solution with O(n^2) time complexity
         */
        public int lengthOfLIS_DP(int[] nums) {
            if (nums == null || nums.length == 0) return 0;
            
            int[] dp = new int[nums.length];
            Arrays.fill(dp, 1);
            int maxLength = 1;
            
            for (int i = 1; i < nums.length; i++) {
                for (int j = 0; j < i; j++) {
                    if (nums[i] > nums[j]) {
                        dp[i] = Math.max(dp[i], dp[j] + 1);
                    }
                }
                maxLength = Math.max(maxLength, dp[i]);
            }
            
            return maxLength;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test cases
        int[][] testCases = {
            {10, 9, 2, 5, 3, 7, 101, 18},
            {0, 1, 0, 3, 2, 3},
            {7, 7, 7, 7, 7, 7, 7},
            {1, 3, 6, 7, 9, 4, 10, 5, 6},
            {10, 22, 9, 33, 21, 50, 41, 60}
        };
        int[] expected = {4, 4, 1, 5, 5};
        
        for (int i = 0; i < testCases.length; i++) {
            int result = solution.lengthOfLIS(testCases[i]);
            int resultDP = solution.lengthOfLIS_DP(testCases[i]);
            System.out.println("Test " + (i + 1) + ":");
            System.out.println("  nums: " + Arrays.toString(testCases[i]));
            System.out.println("  Binary Search result: " + result + " | DP result: " + resultDP + " | Expected: " + expected[i]);
            System.out.println();
        }
    }
}

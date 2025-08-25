package com.bh;

import java.util.Arrays;

/**
 * LeetCode 300: Longest Increasing Subsequence
 * Given an integer array nums, return the length of the longest strictly increasing subsequence.
 * <p>
 * Solution Approach:
 * 1. Dynamic Programming approach: O(n^2) time complexity
 * 2. Binary Search approach: O(n log n) time complexity (implemented here)
 * 3. Top-Down (memoized) recursion: O(n^2) (added)
 * <p>
 * Time Complexity: O(n log n) for lengthOfLIS (binary search method)
 * Space Complexity: O(n)
 */
public class no0300_Longest_Increasing_Subsequence {
    static class Solution {
        /**
         * Returns the length of the longest increasing subsequence using binary search approach.
         *
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
                if (left == size) {
                    size++;
                }
            }

            return size;
        }

        /**
         * Alternative bottom-up DP solution with O(n^2) time complexity.
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

        /**
         * Top-Down (memoized) recursion version. Also O(n^2) time, O(n^2) memo space.
         * dfs(i, prevIdx) = max of:
         * - skip current: dfs(i+1, prevIdx)
         * - take current (if nums[i] > nums[prevIdx]): 1 + dfs(i+1, i)
         * prevIdx of -1 denotes no previous element chosen yet.
         */
        public int lengthOfLIS_TopDown(int[] nums) {
            if (nums == null || nums.length == 0) {
                return 0;
            }
            int n = nums.length;
            int[][] memo = new int[n][n + 1]; // prevIdx shifted by +1 to map -1..n-1 => 0..n
            for (int[] row : memo) {
                Arrays.fill(row, -1);
            }
            return dfs(0, -1, nums, memo);
        }

        private int dfs(int i, int prevIdx, int[] nums, int[][] memo) {
            if (i == nums.length) {
                return 0;
            }
            int memoIdx = prevIdx + 1; // shift
            if (memo[i][memoIdx] != -1) {
                return memo[i][memoIdx];
            }
            // Option 1: skip
            int best = dfs(i + 1, prevIdx, nums, memo);
            // Option 2: take if increasing
            if (prevIdx == -1 || nums[i] > nums[prevIdx]) {
                best = Math.max(best, 1 + dfs(i + 1, i, nums, memo));
            }
            memo[i][memoIdx] = best;
            return best;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test cases
        int[][] testCases = {{10, 9, 2, 5, 3, 7, 101, 18}, {0, 1, 0, 3, 2, 3}, {7, 7, 7, 7, 7, 7, 7}, {1, 3, 6, 7, 9, 4, 10, 5, 6}, {10, 22, 9, 33, 21, 50, 41, 60}};
        int[] expected = {4, 4, 1, 5, 5};

        for (int i = 0; i < testCases.length; i++) {
            int result = solution.lengthOfLIS(testCases[i]);
            int resultDP = solution.lengthOfLIS_DP(testCases[i]);
            int resultTopDown = solution.lengthOfLIS_TopDown(testCases[i]);
            System.out.println("Test " + (i + 1) + ":");
            System.out.println("  nums: " + Arrays.toString(testCases[i]));
            System.out.println("  Binary Search: " + result + " | Bottom-Up DP: " + resultDP + " | Top-Down DP: " + resultTopDown + " | Expected: " + expected[i]);
            System.out.println();
        }
    }
}

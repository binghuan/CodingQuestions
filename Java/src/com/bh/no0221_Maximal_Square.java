package com.bh;

/**
 * LeetCode 221: Maximal Square
 * Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 */
public class no0221_Maximal_Square {
    static class Solution {
        public int maximalSquare(char[][] matrix) {
            if (matrix == null || matrix.length == 0 || matrix[0].length == 0) return 0;
            int m = matrix.length, n = matrix[0].length;
            int maxLen = 0;
            int[][] dp = new int[m + 1][n + 1];
            for (int i = 1; i <= m; i++) {
                for (int j = 1; j <= n; j++) {
                    if (matrix[i - 1][j - 1] == '1') {
                        dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
                        maxLen = Math.max(maxLen, dp[i][j]);
                    }
                }
            }
            return maxLen * maxLen;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        char[][][] testCases = {
            {
                {'1','0','1','0','0'},
                {'1','0','1','1','1'},
                {'1','1','1','1','1'},
                {'1','0','0','1','0'}
            },
            {
                {'0','1'},
                {'1','0'}
            },
            {
                {'0'}
            },
            {
                {'1','1','1'},
                {'1','1','1'},
                {'1','1','1'}
            }
        };
        int[] expected = {4, 1, 0, 9};
        for (int i = 0; i < testCases.length; i++) {
            int result = solution.maximalSquare(testCases[i]);
            System.out.println("Test " + (i+1) + " | Output: " + result + " | Expected: " + expected[i]);
        }
    }
}

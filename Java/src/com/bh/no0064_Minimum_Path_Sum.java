package com.bh;

public class no0064_Minimum_Path_Sum {

	/**
	 * Minimum Path Sum
	 * Given an m x n grid filled with non-negative numbers, find a path from top-left to bottom-right
	 * that minimizes the sum of all numbers along its path. You can only move down or right.
	 *
	 * DP relation:
	 *   dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])
	 * with borders initialized by cumulative sums of first row/column.
	 *
	 * Time: O(m*n), Space: O(n) using rolling array.
	 */
	public int minPathSum(int[][] grid) {
		int m = grid.length;
		int n = grid[0].length;
		// Use 1D DP: dp[j] stores the min sum to reach current row at column j
		int[] dp = new int[n];

		dp[0] = grid[0][0];
		// First row: can only come from left
		for (int j = 1; j < n; j++) dp[j] = dp[j - 1] + grid[0][j];

		for (int i = 1; i < m; i++) {
			// First column: can only come from top
			dp[0] += grid[i][0];
			for (int j = 1; j < n; j++) {
				dp[j] = Math.min(dp[j], dp[j - 1]) + grid[i][j];
			}
		}
		return dp[n - 1];
	}

	// Simple test harness
	public static void main(String[] args) {
		no0064_Minimum_Path_Sum solver = new no0064_Minimum_Path_Sum();

		int[][] grid1 = {
			{1, 3, 1},
			{1, 5, 1},
			{4, 2, 1}
		}; // Expected 7
		System.out.println("Example 1 -> " + solver.minPathSum(grid1));

		int[][] grid2 = {
			{1, 2, 3},
			{4, 5, 6}
		}; // Expected 12
		System.out.println("Example 2 -> " + solver.minPathSum(grid2));
	}
}

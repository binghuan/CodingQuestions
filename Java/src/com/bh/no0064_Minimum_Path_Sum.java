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

	/**
	 * Top-down recursion with memoization.
	 * dp(i, j): minimum path sum from (i, j) to bottom-right.
	 * Transitions: dp(i, j) = grid[i][j] + min(dp(i+1, j), dp(i, j+1)).
	 * Time: O(m*n), Space: O(m*n) for memo + recursion stack.
	 */
	public int minPathSumTopDown(int[][] grid) {
		int m = grid.length, n = grid[0].length;
		Integer[][] memo = new Integer[m][n];
		return dfs(grid, 0, 0, memo);
	}

	// DFS helper: returns the minimum path sum from cell (i, j) to the bottom-right.
    private int dfs(int[][] grid, int i, int j, Integer[][] memo) {
        int m = grid.length, n = grid[0].length;
        // Base case: if we're at the destination, cost is the cell value itself.
        if (i == m - 1 && j == n - 1) {
            return grid[i][j];
        }
        // Return cached result if already computed.
        if (memo[i][j] != null) {
            return memo[i][j];
        }
        // Initialize costs to a large number (use MAX_VALUE/2 to avoid overflow on addition).
        int down = Integer.MAX_VALUE / 2, right = Integer.MAX_VALUE / 2;
        // Recurse to the cell below if within bounds.
        if (i + 1 < m) {
            down = dfs(grid, i + 1, j, memo);
        }
        // Recurse to the cell to the right if within bounds.
        if (j + 1 < n) {
            right = dfs(grid, i, j + 1, memo);
        }
        // Memoize and return current cell value plus the cheaper of the two options.
        return memo[i][j] = grid[i][j] + Math.min(down, right);
    }

	// Simple test harness
	public static void main(String[] args) {
		no0064_Minimum_Path_Sum solver = new no0064_Minimum_Path_Sum();

		int[][] grid1 = {
			{1, 3, 1},
			{1, 5, 1},
			{4, 2, 1}
		}; // Expected 7
		System.out.println("Example 1 (Bottom-up) -> " + solver.minPathSum(grid1));
		System.out.println("Example 1 (Top-down)  -> " + solver.minPathSumTopDown(grid1));

		int[][] grid2 = {
			{1, 2, 3},
			{4, 5, 6}
		}; // Expected 12
		System.out.println("Example 2 (Bottom-up) -> " + solver.minPathSum(grid2));
		System.out.println("Example 2 (Top-down)  -> " + solver.minPathSumTopDown(grid2));
	}
}

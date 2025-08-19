package com.bh;

public class no0416_Partition_Equal_Subset_Sum {

	/**
	 * Partition Equal Subset Sum (LeetCode 416)
	 * Return true if nums can be split into two subsets with equal sum.
	 * Approach: subset-sum to target = totalSum / 2 using 1D DP.
	 * Time: O(n * target), Space: O(target)
	 */
	public static boolean canPartition(int[] nums) {
		if (nums == null || nums.length == 0) return true;
		int total = 0;
		for (int x : nums) total += x;
		if ((total & 1) == 1) return false; // odd sum cannot be split equally
		int target = total >>> 1;

		boolean[] dp = new boolean[target + 1];
		dp[0] = true;
		for (int num : nums) {
			if (num > target) return false; // cannot place this number anywhere to reach target
			for (int s = target; s >= num; s--) {
				dp[s] = dp[s] || dp[s - num];
			}
			if (dp[target]) return true; // early exit
		}
		return dp[target];
	}

	// Minimal test harness
	public static void main(String[] args) {
		int[][] tests = {
			{1,5,11,5},
			{1,2,3,5},
			{1,1},
			{2,2,3,5},
			{2,2,1,1}
		};
		boolean[] expected = {true, false, true, false, true};

		for (int i = 0; i < tests.length; i++) {
			boolean ans = canPartition(tests[i]);
			System.out.printf("Test %d: %s (expected %s)\n", i+1, ans, expected[i]);
		}
	}
}

package com.bh;

import java.util.*;

/**
 * Minimum Cost to Reach the End with Bounded Jumps
 *
 * Contract:
 * - cost: cost[i] is the cost to land on point i+1 (1-indexed positions). Start at point 0 with cost 0.
 * - k: you may jump from position j to any i where 1 <= i-j <= k.
 * - Return the minimum total cost to reach position n (the end).
 *
 * Recurrence:
 *   dp[0] = 0
 *   dp[i] = min(dp[j]) for j in [max(0, i-k), i-1] + cost[i-1], for i = 1..n
 */
public class MinCostJump {

	/**
	 * Bottom-up DP. Time: O(n * k), Space: O(n).
	 */
	public static int minCostBottomUp(int[] cost, int k) {
		int n = (cost == null) ? 0 : cost.length;
		if (n == 0) return 0;

		int[] dp = new int[n + 1]; // dp[0..n]
		Arrays.fill(dp, Integer.MAX_VALUE / 2);
		dp[0] = 0;

		for (int i = 1; i <= n; i++) {
			int from = Math.max(0, i - k);
			int best = Integer.MAX_VALUE / 2;
			for (int j = from; j <= i - 1; j++) {
				best = Math.min(best, dp[j]);
			}
			dp[i] = best + cost[i - 1];
		}
		return dp[n];
	}

	/**
	 * Top-down recursion with memoization. Time: O(n * k), Space: O(n) for memo + recursion stack.
	 */
	public static int minCostTopDown(int[] cost, int k) {
		int n = (cost == null) ? 0 : cost.length;
		if (n == 0) return 0;
		Integer[] memo = new Integer[n + 1];
		return dfs(n, cost, k, memo);
	}

	// Minimum cost to reach position i (0..n). Base: i == 0 -> 0.
	private static int dfs(int i, int[] cost, int k, Integer[] memo) {
		if (i == 0) return 0;
		if (memo[i] != null) return memo[i];

		int best = Integer.MAX_VALUE / 2;
		int from = Math.max(0, i - k);
		for (int j = from; j <= i - 1; j++) {
			best = Math.min(best, dfs(j, cost, k, memo));
		}
		return memo[i] = best + cost[i - 1];
	}

	// Simple test harness mirroring the JavaScript tests.
	public static void main(String[] args) {
		System.out.println("=== Minimum Cost Jump (Java) ===\n");

		// Helper to print results for both methods
		class Case { int[] cost; int k; String name; Case(String name, int[] c, int k){this.name=name; this.cost=c; this.k=k;} }
		List<Case> cases = Arrays.asList(
			new Case("Basic", new int[]{1,3,2,4}, 2),
			new Case("Direct jump", new int[]{10,15,20}, 3),
			new Case("One step at a time", new int[]{1,2,3,4}, 1),
			new Case("Single element", new int[]{5}, 1),
			new Case("Cheaper detour", new int[]{100,1,1,1,100}, 2),
			new Case("Large jump distance", new int[]{1,2,3,4,5}, 10),
			new Case("Complex", new int[]{2,1,3,4,2,1,5}, 3),
			new Case("Empty", new int[]{}, 1),
			new Case("All same", new int[]{5,5,5,5}, 2),
			new Case("Decreasing", new int[]{10,8,6,4,2}, 2)
		);

		for (Case c : cases) {
			int bu = minCostBottomUp(c.cost, c.k);
			int td = minCostTopDown(c.cost, c.k);
			System.out.printf("%s -> BottomUp=%d, TopDown=%d\n", c.name, bu, td);
		}
	}
}


package com.bh;

import java.util.*;

/**
 * LeetCode 322: Coin Change
 * 
 * Problem: You are given an integer array coins representing coins of different denominations 
 * and an integer amount representing a total amount of money.
 * Return the fewest number of coins that you need to make up that amount. 
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * You may assume that you have an infinite number of each kind of coin.
 * 
 * Problem Description: Given an integer array coins representing different coin denominations, 
 * and an integer amount representing the total amount of money.
 * Return the minimum number of coins needed to make up that amount. 
 * If the amount cannot be made up by any combination of coins, return -1.
 * You may assume that you have an infinite number of each type of coin.
 */
public class no0322_Coin_Change {

    /**
     * Solution 1: Dynamic Programming (Bottom-up) - Optimal Solution
     * Approach 1: Dynamic Programming (Bottom-up) - Optimal Solution
     * 
     * Algorithm:
     * 1. Create dp array where dp[i] represents minimum coins needed for amount i
     * 2. Initialize dp[0] = 0 (0 coins needed for amount 0)
     * 3. For each amount from 1 to target, try each coin denomination
     * 4. Update dp[amount] with minimum coins needed
     * 
     * Algorithm Steps:
     * 1. Create dp array where dp[i] represents the minimum coins needed for amount i
     * 2. Initialize dp[0] = 0 (0 coins needed for amount 0)
     * 3. For each amount from 1 to target, try each coin denomination
     * 4. Update dp[amount] with the minimum coins needed
     * 
     * Time Complexity: O(amount * coins.length)
     * Space Complexity: O(amount)
     * 
     * Time Complexity: O(amount * coins.length)
     * Space Complexity: O(amount)
     */
    public int coinChange(int[] coins, int amount) {
        // Handle edge case
        if (amount == 0) return 0;
        
        // dp[i] represents minimum coins needed for amount i
        // dp[i] represents minimum coins needed for amount i
        int[] dp = new int[amount + 1];
        
        // Initialize with impossible value (amount + 1 is larger than any possible answer)
        // Initialize with impossible value (amount + 1 is larger than any possible answer)
        Arrays.fill(dp, amount + 1);
        
        // Base case: 0 coins needed for amount 0
        // Base case: 0 coins needed for amount 0
        dp[0] = 0;
        
        // Fill dp array for each amount from 1 to target amount
        // Fill dp array for each amount from 1 to target amount
        for (int currentAmount = 1; currentAmount <= amount; currentAmount++) {
            // Try each coin denomination
            // Try each coin denomination
            for (int coin : coins) {
                if (coin <= currentAmount) {
                    // If we can use this coin, update minimum coins needed
                    // If we can use this coin, update minimum coins needed
                    dp[currentAmount] = Math.min(dp[currentAmount], dp[currentAmount - coin] + 1);
                }
            }
        }
        
        // Return result: -1 if impossible, otherwise minimum coins needed
        // Return result: -1 if impossible, otherwise minimum coins needed
        return dp[amount] > amount ? -1 : dp[amount];
    }
    
    /**
     * Solution 2: BFS Approach
     * Approach 2: Breadth-First Search Method
     * 
     * Treats the problem as finding shortest path in a graph
     * Treats the problem as finding the shortest path in a graph
     * 
     * Time Complexity: O(amount * coins.length)
     * Space Complexity: O(amount)
     * 
     * Time Complexity: O(amount * coins.length)
     * Space Complexity: O(amount)
     */
    public int coinChangeBFS(int[] coins, int amount) {
        if (amount == 0) return 0;
        
        Queue<Integer> queue = new LinkedList<>();
        Set<Integer> visited = new HashSet<>();
        
        queue.offer(0);
        visited.add(0);
        
        int level = 0;
        
        while (!queue.isEmpty()) {
            int size = queue.size();
            level++;
            
            for (int i = 0; i < size; i++) {
                int currentAmount = queue.poll();
                
                for (int coin : coins) {
                    int nextAmount = currentAmount + coin;
                    
                    if (nextAmount == amount) {
                        return level;
                    }
                    
                    if (nextAmount < amount && !visited.contains(nextAmount)) {
                        visited.add(nextAmount);
                        queue.offer(nextAmount);
                    }
                }
            }
        }
        
        return -1;
    }
    
    /**
     * Solution 3: Top-down Dynamic Programming (Memoization)
     * Approach 3: Top-down Dynamic Programming (Memoization)
     * 
     * Uses recursion with memoization to avoid redundant calculations
     * Uses recursion with memoization to avoid redundant calculations
     * 
     * Time Complexity: O(amount * coins.length)
     * Space Complexity: O(amount)
     * 
     * Time Complexity: O(amount * coins.length)
     * Space Complexity: O(amount)
     */
    public int coinChangeTopDown(int[] coins, int amount) {
        if (amount == 0) return 0;
        
        // Memoization array: -1 means not computed, -2 means impossible
        // Memoization array: -1 means not computed, -2 means impossible
        int[] memo = new int[amount + 1];
        Arrays.fill(memo, -1);
        
        int result = coinChangeHelper(coins, amount, memo);
        return result == Integer.MAX_VALUE ? -1 : result;
    }
    
    private int coinChangeHelper(int[] coins, int amount, int[] memo) {
        if (amount == 0) return 0;
        if (amount < 0) return Integer.MAX_VALUE;
        
        if (memo[amount] != -1) {
            return memo[amount];
        }
        
        int minCoins = Integer.MAX_VALUE;
        
        for (int coin : coins) {
            int subResult = coinChangeHelper(coins, amount - coin, memo);
            if (subResult != Integer.MAX_VALUE) {
                minCoins = Math.min(minCoins, subResult + 1);
            }
        }
        
        memo[amount] = minCoins;
        return minCoins;
    }
    
    public static void main(String[] args) {
        no0322_Coin_Change solution = new no0322_Coin_Change();
        
        // Test Case 1: coins = [1,2,5], amount = 11
        // Expected: 3 (11 = 5 + 5 + 1)
        int[] coins1 = {1, 2, 5};
        int amount1 = 11;
        
        System.out.println("=== Test Case 1 ===");
        System.out.println("Input: coins = " + Arrays.toString(coins1) + ", amount = " + amount1);
        
        int result1_dp = solution.coinChange(coins1, amount1);
        System.out.println("Result (DP Bottom-up): " + result1_dp);
        
        int result1_bfs = solution.coinChangeBFS(coins1, amount1);
        System.out.println("Result (BFS): " + result1_bfs);
        
        int result1_topdown = solution.coinChangeTopDown(coins1, amount1);
        System.out.println("Result (DP Top-down): " + result1_topdown);
        
        // Test Case 2: coins = [2], amount = 3
        // Expected: -1 (impossible to make 3 with only coin 2)
        int[] coins2 = {2};
        int amount2 = 3;
        
        System.out.println("\n=== Test Case 2 ===");
        System.out.println("Input: coins = " + Arrays.toString(coins2) + ", amount = " + amount2);
        
        int result2_dp = solution.coinChange(coins2, amount2);
        System.out.println("Result (DP Bottom-up): " + result2_dp);
        
        int result2_bfs = solution.coinChangeBFS(coins2, amount2);
        System.out.println("Result (BFS): " + result2_bfs);
        
        // Test Case 3: coins = [1], amount = 0
        // Expected: 0 (no coins needed for amount 0)
        int[] coins3 = {1};
        int amount3 = 0;
        
        System.out.println("\n=== Test Case 3 ===");
        System.out.println("Input: coins = " + Arrays.toString(coins3) + ", amount = " + amount3);
        
        int result3_dp = solution.coinChange(coins3, amount3);
        System.out.println("Result (DP Bottom-up): " + result3_dp);
        
        // Test Case 4: Complex case from LeetCode discussions
        // coins = [186,419,83,408], amount = 6249
        int[] coins4 = {186, 419, 83, 408};
        int amount4 = 6249;
        
        System.out.println("\n=== Test Case 4 (Complex) ===");
        System.out.println("Input: coins = " + Arrays.toString(coins4) + ", amount = " + amount4);
        
        int result4_dp = solution.coinChange(coins4, amount4);
        System.out.println("Result (DP Bottom-up): " + result4_dp);
        
        // Test Case 5: Why greedy doesn't work
        // coins = [1,6,7,9,11], amount = 13
        // Greedy would pick: 11 + 1 + 1 = 3 coins
        // Optimal: 6 + 7 = 2 coins
        int[] coins5 = {1, 6, 7, 9, 11};
        int amount5 = 13;
        
        System.out.println("\n=== Test Case 5 (Why Greedy Fails) ===");
        System.out.println("Input: coins = " + Arrays.toString(coins5) + ", amount = " + amount5);
        System.out.println("Greedy approach would use: 11 + 1 + 1 = 3 coins");
        System.out.println("Optimal approach: 6 + 7 = 2 coins");
        
        int result5_dp = solution.coinChange(coins5, amount5);
        System.out.println("Result (DP Bottom-up): " + result5_dp);
        
        System.out.println("\n=== Algorithm Comparison ===");
        System.out.println("1. DP Bottom-up: O(amount * coins.length) time, O(amount) space - OPTIMAL!");
        System.out.println("2. DP Top-down: O(amount * coins.length) time, O(amount) space");
        System.out.println("3. BFS: O(amount * coins.length) time, O(amount) space");
        System.out.println("\nWhy not Greedy?");
        System.out.println("Greedy fails when coin denominations are not 'canonical'.");
        System.out.println("Example: coins=[1,6,7,9,11], amount=13");
        System.out.println("Greedy: 11+1+1=3 coins, Optimal: 6+7=2 coins");
    }
}

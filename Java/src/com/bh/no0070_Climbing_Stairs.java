
package com.bh;

import java.util.HashMap;

/**
 * LeetCode 70: Climbing Stairs
 * 
 * Problem:
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * 
 * Approach:
 * This is a classic dynamic programming problem, similar to computing the nth Fibonacci number.
 * - If you are on step n, you could have come from step n-1 (1 step) or step n-2 (2 steps).
 * - So, total ways to reach step n = ways(n-1) + ways(n-2)
 * - Use memoization (history map) to avoid redundant calculations.
 */
public class no0070_Climbing_Stairs {

    static
    class Solution {
        // Memoization map to store previously computed results
        HashMap<Integer, Integer> history = new HashMap<>();

        /**
         * Returns the number of distinct ways to climb to the top.
         * @param n number of steps
         * @return number of ways to climb to the top
         */
        public int climbStairs(int n) {
            // Base case: only 1 way to climb 1 step
            if(n == 1) {
                return 1;
            }
            // Base case: two ways to climb 2 steps (1+1 or 2)
            if(n == 2) {
                return 2;
            }
            // If n is less than or equal to 0, no way to climb
            if(n <= 0) {
                return 0;
            }
            // Check if result is already computed
            if(history.get(n) != null) {
                return history.get(n);
            }
            // Recursive relation: ways(n) = ways(n-1) + ways(n-2)
            int steps = climbStairs(n-1) + climbStairs(n-2);
            // Store result in memoization map
            history.put(n , steps);
            return steps;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] testCases = {1, 2, 3, 4, 5, 10, 20, 0, -1};
        int[] expected = {1, 2, 3, 5, 8, 89, 10946, 0, 0};
        for (int i = 0; i < testCases.length; i++) {
            int n = testCases[i];
            int result = solution.climbStairs(n);
            System.out.println("n = " + n + " | Output: " + result + " | Expected: " + expected[i]);
        }
    }

}

package com.bh;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * LeetCode 39: Combination Sum
 * 
 * Problem Description:
 * Given an array of distinct integers candidates and a target integer target, 
 * return a list of all unique combinations of candidates where the chosen numbers sum to target.
 * You may choose the same number from candidates an unlimited number of times.
 * 
 * Example:
 * Input: candidates = [2,3,6,7], target = 7
 * Output: [[2,2,3],[7]]
 * 
 * Approach:
 * Use backtracking (DFS) to explore all possible combinations.
 * Sort the array to enable early termination when current number > remaining sum.
 * 
 * Time Complexity: O(N^(T/M)) where N = length of candidates, T = target, M = minimal value
 * Space Complexity: O(T/M) for recursion depth
 */
public class no0039_Combination_Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1: candidates = [2,3,6,7], target = 7
        int[] candidates1 = {2, 3, 6, 7};
        int target1 = 7;
        List<List<Integer>> result1 = solution.combinationSum(candidates1, target1);
        System.out.println("=== Example 1 ===");
        System.out.println("Input: candidates = [2,3,6,7], target = 7");
        System.out.println("Output: " + result1);
        System.out.println("Expected: [[2,2,3],[7]]");
        System.out.println();

        // Example 2: candidates = [2,3,5], target = 8
        int[] candidates2 = {2, 3, 5};
        int target2 = 8;
        List<List<Integer>> result2 = solution.combinationSum(candidates2, target2);
        System.out.println("=== Example 2 ===");
        System.out.println("Input: candidates = [2,3,5], target = 8");
        System.out.println("Output: " + result2);
        System.out.println("Expected: [[2,2,2,2],[2,3,3],[3,5]]");
        System.out.println();

        // Example 3: candidates = [2], target = 1
        int[] candidates3 = {2};
        int target3 = 1;
        List<List<Integer>> result3 = solution.combinationSum(candidates3, target3);
        System.out.println("=== Example 3 ===");
        System.out.println("Input: candidates = [2], target = 1");
        System.out.println("Output: " + result3);
        System.out.println("Expected: []");
        System.out.println();
    }

    static
    class Solution {
        /**
         * Find all unique combinations that sum to target using backtracking
         * 
         * @param candidates Array of distinct positive integers
         * @param target Target sum value
         * @return List of all valid combinations
         */
        public List<List<Integer>> combinationSum(int[] candidates, int target) {
            // Sort array to enable early termination when current number > remaining sum
            Arrays.sort(candidates);
            
            // Initialize data structures for backtracking
            List<Integer> currentCombination = new ArrayList<>();
            List<List<Integer>> output = new ArrayList<>();

            // Start DFS from index 0 with full target remaining
            dfs(
                    candidates,
                    0,
                    target,
                    currentCombination,
                    output
            );

            return output;
        }

        /**
         * Depth-First Search to explore all possible combinations using backtracking
         * 
         * @param candidates Array of candidate numbers
         * @param startedIndex Current index to start exploration (avoid duplicates)
         * @param remainingSum Remaining sum needed to reach target
         * @param currentCombination Current combination being built
         * @param answer Final result list to store valid combinations
         */
        private void dfs(
                int[] candidates,
                int startedIndex,
                int remainingSum,
                List<Integer> currentCombination,
                List<List<Integer>> answer
        ) {
            // Base case: found a valid combination
            if (remainingSum == 0) {
                // Create a deep copy to avoid reference issues
                ArrayList<Integer> cloned = new ArrayList<>(currentCombination);
                answer.add(cloned);
                return;
            }

            // Explore all possible choices starting from startedIndex
            for (int i = startedIndex; i < candidates.length; i++) {
                int chosenNum = candidates[i];

                // Early termination: if current number > remaining sum, 
                // all subsequent numbers will also be > remaining sum (array is sorted)
                if (chosenNum > remainingSum) {
                    break;
                }

                // Choose: add current number to combination
                currentCombination.add(chosenNum);

                // Explore: recursively search with updated parameters
                // Note: pass 'i' (not i+1) to allow reusing the same number
                dfs(
                        candidates,
                        i,                              // Allow reusing same number
                        remainingSum - chosenNum,       // Update remaining sum
                        currentCombination,
                        answer
                );

                // Unchoose: backtrack by removing the last added number
                currentCombination.removeLast();
            }
        }
    }

}


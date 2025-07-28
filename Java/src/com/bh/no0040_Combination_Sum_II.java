package com.bh;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

/**
 * LeetCode 40: Combination Sum II
 * 
 * Problem Description:
 * Given a collection of candidate numbers (candidates) and a target number (target), 
 * find all unique combinations in candidates where the candidate numbers sum to target.
 * Each number in candidates may only be used once in the combination.
 * Note: The solution set must not contain duplicate combinations.
 * 
 * Example:
 * Input: candidates = [10,1,2,7,6,1,5], target = 8
 * Output: [[1,1,6],[1,2,5],[1,7],[2,6]]
 * 
 * Key Differences from Combination Sum I:
 * 1. Each number can only be used once (not unlimited times)
 * 2. The array may contain duplicates, but result combinations must be unique
 * 3. Need to handle duplicate elements properly to avoid duplicate combinations
 * 
 * Approach:
 * Use backtracking with proper duplicate handling:
 * - Sort array to group duplicates together
 * - Skip duplicate elements at the same recursion level
 * - Each element can only be used once (nextCurr + 1)
 * 
 * Time Complexity: O(2^N) in worst case, where N = length of candidates
 * Space Complexity: O(target) for recursion depth and combination storage
 * 
 * Reference: https://leetcode.com/problems/combination-sum-ii/solution/
 */
public class no0040_Combination_Sum_II {
    static
    class Solution {
        /**
         * Find all unique combinations that sum to target, each number used at most once
         * 
         * @param candidates Array of candidate numbers (may contain duplicates)
         * @param target Target sum value
         * @return List of all unique combinations
         */
        public List<List<Integer>> combinationSum2(int[] candidates, int target) {
            List<List<Integer>> results = new ArrayList<>();
            LinkedList<Integer> comb = new LinkedList<>();

            // Sort array to group duplicate elements together
            // This enables us to skip duplicates efficiently
            Arrays.sort(candidates);

            // Start backtracking from index 0 with full target remaining
            backtrack(candidates, comb, target, 0, results);
            return results;
        }

        /**
         * Backtracking helper method to explore all valid combinations
         * 
         * @param candidates Sorted array of candidate numbers
         * @param comb Current combination being built
         * @param remain Remaining sum needed to reach target
         * @param curr Current index to start exploration from
         * @param results Final result list to store valid combinations
         */
        private void backtrack(int[] candidates,
                               LinkedList<Integer> comb,
                               Integer remain,
                               Integer curr,
                               List<List<Integer>> results) {
            // Base case: found a valid combination
            if (remain == 0) {
                // Create a deep copy to avoid reference issues
                results.add(new ArrayList<Integer>(comb));
                return;
            }

            // Explore all possible choices starting from curr index
            for (int nextCurr = curr; nextCurr < candidates.length; ++nextCurr) {

                // Skip duplicates at the same recursion level
                // Key insight: if candidates[nextCurr] == candidates[nextCurr-1] and nextCurr > curr,
                // it means we're considering the same value again at the same level,
                // which would create duplicate combinations
                if (nextCurr > curr && candidates[nextCurr] == candidates[nextCurr - 1]) {
                    continue;
                }

                Integer pick = candidates[nextCurr];
                
                // Early termination: if current number > remaining sum,
                // all subsequent numbers will also be > remaining sum (array is sorted)
                if (remain - pick < 0) {
                    break;
                }

                // Choose: add current number to combination
                comb.addLast(pick);
                
                // Explore: recursively search with updated parameters
                // Note: pass nextCurr + 1 (not nextCurr) since each number can only be used once
                backtrack(candidates, comb, remain - pick, nextCurr + 1, results);
                
                // Unchoose: backtrack by removing the last added number
                comb.removeLast();
            }
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1: candidates = [10,1,2,7,6,1,5], target = 8
        int[] candidates1 = {10, 1, 2, 7, 6, 1, 5};
        int target1 = 8;
        List<List<Integer>> result1 = solution.combinationSum2(candidates1, target1);
        System.out.println("=== Example 1 ===");
        System.out.println("Input: candidates = [10,1,2,7,6,1,5], target = 8");
        System.out.println("Output: " + result1);
        System.out.println("Expected: [[1,1,6],[1,2,5],[1,7],[2,6]]");
        System.out.println();

        // Example 2: candidates = [2,5,2,1,2], target = 5
        int[] candidates2 = {2, 5, 2, 1, 2};
        int target2 = 5;
        List<List<Integer>> result2 = solution.combinationSum2(candidates2, target2);
        System.out.println("=== Example 2 ===");
        System.out.println("Input: candidates = [2,5,2,1,2], target = 5");
        System.out.println("Output: " + result2);
        System.out.println("Expected: [[1,2,2],[5]]");
        System.out.println();

        // Example 3: Edge case with single element
        int[] candidates3 = {1};
        int target3 = 1;
        List<List<Integer>> result3 = solution.combinationSum2(candidates3, target3);
        System.out.println("=== Example 3 ===");
        System.out.println("Input: candidates = [1], target = 1");
        System.out.println("Output: " + result3);
        System.out.println("Expected: [[1]]");
        System.out.println();

        // Example 4: No valid combinations
        int[] candidates4 = {1, 2};
        int target4 = 4;
        List<List<Integer>> result4 = solution.combinationSum2(candidates4, target4);
        System.out.println("=== Example 4 ===");
        System.out.println("Input: candidates = [1,2], target = 4");
        System.out.println("Output: " + result4);
        System.out.println("Expected: []");
        System.out.println();
    }
}

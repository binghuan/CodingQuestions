package com.bh;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * LeetCode 46: Permutations
 * Given an array nums of distinct integers, return all the possible permutations.
 * 
 * Problem Analysis:
 * - Generate all possible arrangements of the given numbers
 * - Each number can only be used once in each permutation
 * - Order matters (permutation, not combination)
 * 
 * Solution Approach:
 * Use backtracking (DFS) to generate all permutations:
 * 1. Try each unused number at current position
 * 2. Mark the number as used and recurse
 * 3. Backtrack by removing the number and marking as unused
 * 
 * Time Complexity: O(n! * n) - n! permutations, each takes O(n) to copy
 * Space Complexity: O(n) - recursion depth and auxiliary arrays
 */
public class no0046_Permutations {

    static
    class Solution {
        /**
         * Returns all possible permutations of the given array.
         * 
         * @param nums array of distinct integers
         * @return list of all permutations
         */
        public List<List<Integer>> permute(int[] nums) {
            ArrayList<Integer> curr = new ArrayList<Integer>();
            ArrayList<Integer> numIndexInUse = new ArrayList<Integer>();
            ArrayList<List<Integer>> ans = new ArrayList<List<Integer>>();
            dfs(nums, curr, numIndexInUse, ans);
            return ans;
        }

        /**
         * DFS helper method to generate permutations using backtracking.
         * 
         * Algorithm Steps:
         * 1. Base case: if current permutation is complete (size == nums.length)
         *    - Add a copy of current permutation to result
         * 2. Recursive case: try each unused number
         *    - Add number to current permutation
         *    - Mark index as used
         *    - Recurse to fill next position
         *    - Backtrack: remove number and unmark index
         * 
         * @param nums original array
         * @param curr current permutation being built
         * @param numIndexInUse tracks which indices are already used
         * @param ans result list to store all permutations
         */
        public void dfs(int[] nums, ArrayList<Integer> curr, ArrayList<Integer> numIndexInUse, ArrayList<List<Integer>> ans) {
            // Base case: permutation is complete
            if (curr.size() == nums.length) {
                List<Integer> copy = new ArrayList<Integer>(curr);
                ans.add(copy);
                return;
            }
            
            // Try each unused number for current position
            for (int i = 0; i < nums.length; i++) {
                // Skip if this index is already used
                if (numIndexInUse.contains(i)) {
                    continue;
                }

                int number = nums[i];
                
                // Choose: add current number and mark as used
                curr.add(number);
                numIndexInUse.add(i);

                // Explore: recurse to fill next position
                dfs(nums, curr, numIndexInUse, ans);

                // Unchoose: backtrack by removing number and unmarking
                curr.remove(curr.size() - 1);
                numIndexInUse.remove(numIndexInUse.size() - 1);
            }
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test Case 1: nums = [1,2,3]
        // Expected: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
        int[] nums1 = {1, 2, 3};
        List<List<Integer>> result1 = solution.permute(nums1);
        System.out.println("Test Case 1:");
        System.out.println("Input: " + Arrays.toString(nums1));
        System.out.println("Output: " + result1);
        System.out.println("Expected permutations count: " + factorial(nums1.length));
        System.out.println("Actual permutations count: " + result1.size());
        System.out.println("Test 1 " + (result1.size() == factorial(nums1.length) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 2: nums = [0,1]
        // Expected: [[0,1],[1,0]]
        int[] nums2 = {0, 1};
        List<List<Integer>> result2 = solution.permute(nums2);
        System.out.println("Test Case 2:");
        System.out.println("Input: " + Arrays.toString(nums2));
        System.out.println("Output: " + result2);
        System.out.println("Expected permutations count: " + factorial(nums2.length));
        System.out.println("Actual permutations count: " + result2.size());
        System.out.println("Test 2 " + (result2.size() == factorial(nums2.length) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 3: nums = [1]
        // Expected: [[1]]
        int[] nums3 = {1};
        List<List<Integer>> result3 = solution.permute(nums3);
        System.out.println("Test Case 3:");
        System.out.println("Input: " + Arrays.toString(nums3));
        System.out.println("Output: " + result3);
        System.out.println("Expected permutations count: " + factorial(nums3.length));
        System.out.println("Actual permutations count: " + result3.size());
        System.out.println("Test 3 " + (result3.size() == factorial(nums3.length) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test Case 4: nums = [1,2,3,4]
        // Expected: 24 permutations
        int[] nums4 = {1, 2, 3, 4};
        List<List<Integer>> result4 = solution.permute(nums4);
        System.out.println("Test Case 4:");
        System.out.println("Input: " + Arrays.toString(nums4));
        System.out.println("Output size: " + result4.size());
        System.out.println("Expected permutations count: " + factorial(nums4.length));
        System.out.println("Test 4 " + (result4.size() == factorial(nums4.length) ? "PASSED" : "FAILED"));
        
        // Display first few permutations for verification
        System.out.println("First 6 permutations:");
        for (int i = 0; i < Math.min(6, result4.size()); i++) {
            System.out.println("  " + result4.get(i));
        }
    }
    
    /**
     * Helper method to calculate factorial for test verification
     * @param n the number
     * @return n!
     */
    private static int factorial(int n) {
        if (n <= 1) return 1;
        int result = 1;
        for (int i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

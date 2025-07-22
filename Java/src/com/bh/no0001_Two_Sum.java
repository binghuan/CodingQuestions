
package com.bh;

import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

/**
 * LeetCode 1: Two Sum
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * 
 * Problem Analysis:
 * - We need to find two numbers in the array that sum to the target
 * - Return the indices of these two numbers
 * - Each input has exactly one solution
 * - Cannot use the same element twice
 * 
 * Solution Approaches:
 * 1. Brute Force: O(n²) - Check all pairs (not implemented)
 * 2. Hash Map: O(n) - Use HashMap to store complement values (implemented)
 * 
 * Hash Map Approach:
 * - For each number, calculate its complement (target - current number)
 * - Check if complement exists in HashMap
 * - If exists, return both indices
 * - If not, store current number and index in HashMap
 * 
 * Time Complexity: O(n) - Single pass through the array
 * Space Complexity: O(n) - HashMap storage in worst case
 */
public class no0001_Two_Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Example 1: nums = [2,7,11,15], target = 9
        // Expected output: [0,1]
        int[] nums1 = {2, 7, 11, 15};
        int target1 = 9;
        int[] result1 = solution.twoSum(nums1, target1);
        System.out.println("Example 1:");
        System.out.println("Input: nums = " + Arrays.toString(nums1) + ", target = " + target1);
        System.out.println("Output: " + Arrays.toString(result1));
        System.out.println("Expected: [0, 1]");
        System.out.println("Test 1 " + (Arrays.equals(result1, new int[]{0, 1}) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Example 2: nums = [3,2,4], target = 6
        // Expected output: [1,2]
        int[] nums2 = {3, 2, 4};
        int target2 = 6;
        int[] result2 = solution.twoSum(nums2, target2);
        System.out.println("Example 2:");
        System.out.println("Input: nums = " + Arrays.toString(nums2) + ", target = " + target2);
        System.out.println("Output: " + Arrays.toString(result2));
        System.out.println("Expected: [1, 2]");
        System.out.println("Test 2 " + (Arrays.equals(result2, new int[]{1, 2}) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Example 3: nums = [3,3], target = 6
        // Expected output: [0,1]
        int[] nums3 = {3, 3};
        int target3 = 6;
        int[] result3 = solution.twoSum(nums3, target3);
        System.out.println("Example 3:");
        System.out.println("Input: nums = " + Arrays.toString(nums3) + ", target = " + target3);
        System.out.println("Output: " + Arrays.toString(result3));
        System.out.println("Expected: [0, 1]");
        System.out.println("Test 3 " + (Arrays.equals(result3, new int[]{0, 1}) ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Additional test case: Large array
        int[] nums4 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        int target4 = 15;
        int[] result4 = solution.twoSum(nums4, target4);
        System.out.println("Test 4:");
        System.out.println("Input: nums = " + Arrays.toString(nums4) + ", target = " + target4);
        System.out.println("Output: " + Arrays.toString(result4));
        System.out.println("Expected: [6, 7] (7 + 8 = 15)");
        System.out.println("Test 4 " + (Arrays.equals(result4, new int[]{6, 7}) ? "PASSED" : "FAILED"));
    }

    static
    class Solution {
        /**
         * Finds two numbers in the array that add up to target and returns their indices.
         * 
         * Algorithm Explanation:
         * 1. Create a HashMap to store number -> index mapping
         * 2. Iterate through the array once
         * 3. For each element, calculate complement = target - current_element
         * 4. Check if complement exists in HashMap:
         *    - If YES: We found our pair! Return [complement_index, current_index]
         *    - If NO: Store current element and its index in HashMap
         * 5. Continue until pair is found
         * 
         * Example walkthrough with nums = [2,7,11,15], target = 9:
         * - i=0, nums[0]=2, complement=9-2=7, HashMap={}, 7 not found, add {2:0}
         * - i=1, nums[1]=7, complement=9-7=2, HashMap={2:0}, 2 found! Return [0,1]
         * 
         * @param nums array of integers
         * @param target target sum
         * @return array containing indices of the two numbers that sum to target
         */
        public int[] twoSum(int[] nums, int target) {
            // Use HashMap to store value and its index
            // Time complexity: O(n), Space complexity: O(n)
            
            Map<Integer, Integer> numToIndex = new HashMap<>();
            
            for (int i = 0; i < nums.length; i++) {
                int complement = target - nums[i];
                
                // Check if complement exists in the map
                if (numToIndex.containsKey(complement)) {
                    // Found the pair, return indices
                    return new int[]{numToIndex.get(complement), i};
                }
                
                // Store current number and its index
                numToIndex.put(nums[i], i);
            }
            
            // No solution found (according to problem constraints, this shouldn't happen)
            throw new IllegalArgumentException("No two sum solution");
        }
    }
}



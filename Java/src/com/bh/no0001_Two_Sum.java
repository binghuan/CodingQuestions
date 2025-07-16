
package com.bh;

import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

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



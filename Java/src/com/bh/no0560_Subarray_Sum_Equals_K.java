package com.bh;

import java.util.HashMap;
import java.util.Map;

public class no0560_Subarray_Sum_Equals_K {
    static
    class Solution {
        public int subarraySum(int[] nums, int k) {
            // Use prefix sum + HashMap approach
            // Time complexity: O(n), Space complexity: O(n)
            
            Map<Integer, Integer> prefixSumCount = new HashMap<>();
            prefixSumCount.put(0, 1); // Initialize, prefix sum of 0 occurs once
            
            int prefixSum = 0;
            int count = 0;
            
            for (int num : nums) {
                prefixSum += num;
                
                // If there exists a prefix sum of (prefixSum - k)
                // Then the subarray from that position to current position has sum equal to k
                if (prefixSumCount.containsKey(prefixSum - k)) {
                    count += prefixSumCount.get(prefixSum - k);
                }
                
                // Update the count of current prefix sum
                prefixSumCount.put(prefixSum, prefixSumCount.getOrDefault(prefixSum, 0) + 1);

                // Print log for debugging
                System.out.println("Current num: " + num + ", Prefix Sum: " + prefixSum + ", Count: " + count);
            }
            
            return count;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Example 1: nums = [1,1,1], k = 2
        // Expected output: 2
        int[] nums1 = {1, 1, 1};
        int k1 = 2;
        int result1 = solution.subarraySum(nums1, k1);
        System.out.println("Example 1:");
        System.out.println("Input: nums = [1,1,1], k = 2");
        System.out.println("Output: " + result1);
        System.out.println("Expected: 2");
        System.out.println("Test 1 " + (result1 == 2 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Example 2: nums = [1,2,3], k = 3
        // Expected output: 2
        int[] nums2 = {1, 2, 3};
        int k2 = 3;
        int result2 = solution.subarraySum(nums2, k2);
        System.out.println("Example 2:");
        System.out.println("Input: nums = [1,2,3], k = 3");
        System.out.println("Output: " + result2);
        System.out.println("Expected: 2");
        System.out.println("Test 2 " + (result2 == 2 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Additional test cases
        
        // Test case 3: Single element equals k
        int[] nums3 = {1};
        int k3 = 1;
        int result3 = solution.subarraySum(nums3, k3);
        System.out.println("Test 3:");
        System.out.println("Input: nums = [1], k = 1");
        System.out.println("Output: " + result3);
        System.out.println("Expected: 1");
        System.out.println("Test 3 " + (result3 == 1 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test case 4: No subarray sum equals k
        int[] nums4 = {1, 2, 3};
        int k4 = 7;
        int result4 = solution.subarraySum(nums4, k4);
        System.out.println("Test 4:");
        System.out.println("Input: nums = [1,2,3], k = 7");
        System.out.println("Output: " + result4);
        System.out.println("Expected: 0");
        System.out.println("Test 4 " + (result4 == 0 ? "PASSED" : "FAILED"));
        System.out.println();
        
        // Test case 5: Array with negative numbers
        int[] nums5 = {1, -1, 0};
        int k5 = 0;
        int result5 = solution.subarraySum(nums5, k5);
        System.out.println("Test 5:");
        System.out.println("Input: nums = [1,-1,0], k = 0");
        System.out.println("Output: " + result5);
        System.out.println("Expected: 3");
        System.out.println("Test 5 " + (result5 == 3 ? "PASSED" : "FAILED"));
    }
}

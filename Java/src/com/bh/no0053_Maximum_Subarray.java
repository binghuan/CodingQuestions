package com.bh;

/**
 * LeetCode 53: Maximum Subarray
 * <p>
 * Problem Description:
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * <p>
 * Example:
 * Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 * Output: 6
 * Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * <p>
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 * <p>
 * Solution Approach - Kadane's Algorithm:
 * This is a classic dynamic programming problem that can be solved optimally using Kadane's Algorithm.
 * <p>
 * Key Insight:
 * At each position, we have two choices:
 * 1. Start a new subarray from current element
 * 2. Extend the existing subarray by including current element
 * <p>
 * We choose the option that gives us maximum sum.
 * <p>
 * Algorithm Logic:
 * - currSum: Maximum sum ending at current position
 * - maxSum: Maximum sum seen so far (global maximum)
 * - At each step: currSum = max(nums[i], currSum + nums[i])
 * <p>
 * Time Complexity: O(n) - single pass through array
 * Space Complexity: O(1) - only using constant extra space
 */
public class no0053_Maximum_Subarray {
    static class Solution {
        /**
         * Find the maximum sum of any contiguous subarray using Kadane's Algorithm
         * <p>
         * Kadane's Algorithm Explanation:
         * The algorithm maintains two variables:
         * 1. currSum: Maximum sum ending at current position
         * 2. maxSum: Maximum sum found so far
         * <p>
         * At each element, we decide whether to:
         * - Start fresh from current element (if currSum + nums[i] < nums[i])
         * - Continue the existing subarray (if currSum + nums[i] >= nums[i])
         *
         * @param nums Input array of integers
         * @return Maximum sum of any contiguous subarray
         */
        public int maxSubArray(int[] nums) {
            // Initialize both variables with first element
            // maxSum: tracks the global maximum subarray sum
            int maxSum = nums[0];

            // currSum: tracks the maximum sum ending at current position
            int currSum = nums[0];

            // Iterate through array starting from second element
            for (int i = 1; i < nums.length; i++) {
                // Key decision: extend existing subarray or start new one?
                // If currSum is negative, starting fresh gives better result
                // currSum = max(nums[i], currSum + nums[i])
                currSum = Math.max(nums[i], currSum + nums[i]);

                // Update global maximum if current subarray sum is better
                maxSum = Math.max(maxSum, currSum);

                /*
                 * Example walkthrough with [-2,1,-3,4,-1,2,1,-5,4]:
                 * i=1: currSum=max(1, -2+1)=1, maxSum=max(-2,1)=1
                 * i=2: currSum=max(-3, 1-3)=-2, maxSum=max(1,-2)=1
                 * i=3: currSum=max(4, -2+4)=4, maxSum=max(1,4)=4
                 * i=4: currSum=max(-1, 4-1)=3, maxSum=max(4,3)=4
                 * i=5: currSum=max(2, 3+2)=5, maxSum=max(4,5)=5
                 * i=6: currSum=max(1, 5+1)=6, maxSum=max(5,6)=6
                 * i=7: currSum=max(-5, 6-5)=1, maxSum=max(6,1)=6
                 * i=8: currSum=max(4, 1+4)=5, maxSum=max(6,5)=6
                 * Result: 6 (subarray [4,-1,2,1])
                 */
            }

            return maxSum;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Comprehensive test cases covering different scenarios
        int[][] testCases = {
                {-2, 1, -3, 4, -1, 2, 1, -5, 4},  // Mixed positive/negative
                {1},                               // Single positive element
                {5, 4, -1, 7, 8},                 // Mostly positive
                {-1, -2, -3, -4},                 // All negative
                {0, 0, 0, 0},                     // All zeros
                {-2, -1}                          // Two negative numbers
        };

        int[] expected = {6, 1, 23, -1, 0, -1};
        String[] descriptions = {
                "Mixed positive/negative - classic example",
                "Single element array",
                "Mostly positive numbers",
                "All negative numbers - should return least negative",
                "All zeros - edge case",
                "Two negative numbers - should return larger one"
        };

        System.out.println("=== LeetCode 53: Maximum Subarray Test Results ===\n");

        for (int i = 0; i < testCases.length; i++) {
            int result = solution.maxSubArray(testCases[i]);
            boolean passed = (result == expected[i]);

            System.out.printf("Test Case %d: %s\n", i + 1, descriptions[i]);
            System.out.printf("Input:    %s\n", java.util.Arrays.toString(testCases[i]));
            System.out.printf("Output:   %d\n", result);
            System.out.printf("Expected: %d\n", expected[i]);
            System.out.printf("Status:   %s\n", passed ? "✅ PASSED" : "❌ FAILED");
            System.out.println();
        }

        // Additional explanation for the classic example
        System.out.println("=== Algorithm Walkthrough for [-2,1,-3,4,-1,2,1,-5,4] ===");
        System.out.println("The optimal subarray is [4,-1,2,1] with sum = 6");
        System.out.println("Kadane's algorithm finds this by tracking:");
        System.out.println("- Current subarray sum at each position");
        System.out.println("- Global maximum encountered so far");
        System.out.println("- Decision to extend or restart subarray at each step");
    }
}



package com.bh;

/**
 * LeetCode 53: Maximum Subarray
 * Given an integer array nums, find the subarray with the largest sum, and return its sum.
 * Uses Kadane's Algorithm (O(n) time).
 */
public class no0053_Maximum_Subarray {
    static class Solution {
        public int maxSubArray(int[] nums) {
            int maxSum = nums[0];
            int currSum = nums[0];
            for (int i = 1; i < nums.length; i++) {
                currSum = Math.max(nums[i], currSum + nums[i]);
                maxSum = Math.max(maxSum, currSum);
            }
            return maxSum;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][] testCases = {
            {-2,1,-3,4,-1,2,1,-5,4},
            {1},
            {5,4,-1,7,8},
            {-1,-2,-3,-4},
            {0,0,0,0},
            {-2, -1}
        };
        int[] expected = {6, 1, 23, -1, 0, -1};
        for (int i = 0; i < testCases.length; i++) {
            int result = solution.maxSubArray(testCases[i]);
            System.out.println("nums: " + java.util.Arrays.toString(testCases[i]) + " | Output: " + result + " | Expected: " + expected[i]);
        }
    }
}


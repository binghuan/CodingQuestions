package com.bh;

/**
 * LeetCode 704: Binary Search
 * Given a sorted array of integers nums and an integer target, return the index of target if it exists, otherwise return -1.
 * The algorithm must have O(log n) runtime complexity.
 * 
 * Approach:
 * Binary search is a classic algorithm for finding elements in a sorted array by continuously narrowing 
 * the search range to quickly locate the target value.
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 */
public class no0704_Binary_Search {
    static class Solution {
        /**
         * Performs binary search on a sorted array to find the target value
         * @param nums sorted integer array
         * @param target the target value to search for
         * @return the index of target if found, otherwise -1
         */
        public int search(int[] nums, int target) {
            // Initialize left and right pointers
            int left = 0, right = nums.length - 1;
            
            // Continue searching while left pointer doesn't exceed right pointer
            while (left <= right) {
                // Calculate middle point, avoiding integer overflow
                int mid = left + (right - left) / 2;
                
                // If middle value equals target, return the index
                if (nums[mid] == target) return mid;
                // If middle value is less than target, search in the right half
                else if (nums[mid] < target) left = mid + 1;
                // If middle value is greater than target, search in the left half
                else right = mid - 1;
            }
            
            // Target not found, return -1
            return -1;
        }
    }

    /**
     * Main method: Test the binary search algorithm
     */
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test cases: arrays covering different scenarios
        int[][] testCases = {
            {-1, 0, 3, 5, 9, 12},    // Regular test case
            {-1, 0, 3, 5, 9, 12},    // Search for non-existent element
            {1},                      // Single element array
            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}  // Larger array
        };
        
        // Corresponding target values
        int[] targets = {9, 2, 1, 7};
        
        // Expected results
        int[] expected = {4, -1, 0, 6};
        
        // Execute tests and display results
        for (int i = 0; i < testCases.length; i++) {
            int result = solution.search(testCases[i], targets[i]);
            System.out.println("Array: " + java.util.Arrays.toString(testCases[i]) + 
                             ", Target: " + targets[i] + 
                             " | Output: " + result + 
                             " | Expected: " + expected[i] +
                             " | " + (result == expected[i] ? "✓ PASS" : "✗ FAIL"));
        }
    }
}


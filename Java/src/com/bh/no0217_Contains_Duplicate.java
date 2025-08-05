package com.bh;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * LeetCode 217: Contains Duplicate
 * 
 * Problem Description:
 * Given an integer array nums, return true if any value appears at least twice in the array,
 * and return false if every element is distinct.
 * 
 * Examples:
 * Input: nums = [1,2,3,1]
 * Output: true
 * Explanation: The element 1 occurs at the indices 0 and 3.
 * 
 * Input: nums = [1,2,3,4]
 * Output: false
 * Explanation: All elements are distinct.
 * 
 * Input: nums = [1,1,1,3,3,4,3,2,4,2]
 * Output: true
 * 
 * Constraints:
 * - 1 <= nums.length <= 10^5
 * - -10^9 <= nums[i] <= 10^9
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */
public class no0217_Contains_Duplicate {
    /**
     * Check if array contains any duplicate values using HashSet
     * 
     * Algorithm:
     * 1. Iterate through the array
     * 2. For each element, check if it's already in the set
     * 3. If found, return true (duplicate exists)
     * 4. If not found, add to set and continue
     * 5. If we finish the loop, no duplicates exist, return false
     * 
     * @param nums Input integer array
     * @return true if any value appears at least twice, false otherwise
     */
    public boolean hasDuplicate(int[] nums) {
        // Use HashSet to track seen elements
        // HashSet provides O(1) average time for contains() and add()
        Set<Integer> set = new HashSet<>();
        
        for (int num : nums) {
            // If element already exists in set, we found a duplicate
            if (set.contains(num)) {
                return true;
            }
            // Add current element to set
            set.add(num);
        }
        
        // No duplicates found after checking all elements
        return false;
    }
    
    /**
     * Alternative solution: Check if array contains duplicates (LeetCode method signature)
     * This method follows the exact signature expected by LeetCode
     * 
     * @param nums Input integer array
     * @return true if any value appears at least twice, false otherwise
     */
    public boolean containsDuplicate(int[] nums) {
        return hasDuplicate(nums);
    }

    public static void main(String[] args) {
        no0217_Contains_Duplicate solution = new no0217_Contains_Duplicate();
        
        // Test cases from LeetCode examples
        int[][] testCases = {
            {1, 2, 3, 1},                    // Example 1: has duplicate (1)
            {1, 2, 3, 4},                    // Example 2: no duplicates
            {1, 1, 1, 3, 3, 4, 3, 2, 4, 2}, // Example 3: multiple duplicates
            {1},                             // Edge case: single element
            {1, 2},                          // Edge case: two different elements
            {2, 2},                          // Edge case: two same elements
            {-1, -2, -3, -1},               // Negative numbers with duplicate
            {-1, -2, -3, -4},               // Negative numbers without duplicate
            {0, 0},                          // Zero duplicates
            {Integer.MAX_VALUE, Integer.MIN_VALUE, Integer.MAX_VALUE}, // Extreme values
            {1, 2, 3, 4, 5, 6, 7, 8, 9, 10} // Larger array without duplicates
        };
        
        boolean[] expected = {
            true,   // [1,2,3,1] - has duplicate 1
            false,  // [1,2,3,4] - all distinct
            true,   // [1,1,1,3,3,4,3,2,4,2] - multiple duplicates
            false,  // [1] - single element
            false,  // [1,2] - two different elements
            true,   // [2,2] - two same elements
            true,   // [-1,-2,-3,-1] - negative duplicate
            false,  // [-1,-2,-3,-4] - negative distinct
            true,   // [0,0] - zero duplicate
            true,   // [MAX,MIN,MAX] - extreme value duplicate
            false   // [1,2,3,4,5,6,7,8,9,10] - larger distinct array
        };
        
        String[] descriptions = {
            "LeetCode Example 1: [1,2,3,1] - duplicate at indices 0 and 3",
            "LeetCode Example 2: [1,2,3,4] - all elements distinct",
            "LeetCode Example 3: [1,1,1,3,3,4,3,2,4,2] - multiple duplicates",
            "Edge case: Single element array",
            "Edge case: Two different elements",
            "Edge case: Two identical elements",
            "Negative numbers with duplicate",
            "Negative numbers all distinct",
            "Zero value duplicates",
            "Extreme integer values with duplicate",
            "Larger array with all distinct elements"
        };
        
        System.out.println("=== LeetCode 217: Contains Duplicate Test Results ===\n");
        
        int passedTests = 0;
        for (int i = 0; i < testCases.length; i++) {
            boolean result = solution.containsDuplicate(testCases[i]);
            boolean passed = (result == expected[i]);
            
            if (passed) passedTests++;
            
            System.out.printf("Test Case %d: %s\n", i + 1, descriptions[i]);
            System.out.printf("Input:    %s\n", Arrays.toString(testCases[i]));
            System.out.printf("Output:   %s\n", result);
            System.out.printf("Expected: %s\n", expected[i]);
            System.out.printf("Status:   %s\n", passed ? "✅ PASSED" : "❌ FAILED");
            System.out.println();
        }
        
        System.out.printf("=== Summary ===\n");
        System.out.printf("Total Tests: %d\n", testCases.length);
        System.out.printf("Passed: %d\n", passedTests);
        System.out.printf("Failed: %d\n", testCases.length - passedTests);
        System.out.printf("Success Rate: %.1f%%\n", (passedTests * 100.0) / testCases.length);
        
        System.out.println("\n=== Algorithm Analysis ===");
        System.out.println("Time Complexity: O(n) - single pass through array");
        System.out.println("Space Complexity: O(n) - HashSet can store up to n elements");
        System.out.println("Approach: Use HashSet to track seen elements and detect duplicates immediately");
    }
}

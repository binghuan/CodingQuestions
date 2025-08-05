package com.bh;

import java.util.Arrays;
import java.util.HashSet;

/**
 * LeetCode 287: Find the Duplicate Number
 * 
 * Problem Description:
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
 * There is only one repeated number in nums, return this repeated number.
 * 
 * Important Constraints:
 * - You must solve the problem WITHOUT modifying the array nums
 * - You must use only CONSTANT extra space
 * 
 * Examples:
 * Input: nums = [1,3,4,2,2] → Output: 2
 * Input: nums = [3,1,3,4,2] → Output: 3
 * Input: nums = [3,3,3,3,3] → Output: 3
 * 
 * Key Insight:
 * Since we have n+1 numbers in range [1,n], by pigeonhole principle,
 * at least one number must be duplicated. We can model this as a cycle
 * detection problem using Floyd's Tortoise and Hare algorithm.
 */
public class no0287_Find_the_Duplicate_Number {
    static
    class Solution {
        /**
         * Solution 1: Floyd's Tortoise and Hare Algorithm (OPTIMAL - meets all constraints)
         * 
         * Key Insight: Treat the array as a linked list where nums[i] points to nums[nums[i]].
         * Since there's a duplicate, there must be a cycle in this "linked list".
         * 
         * Algorithm:
         * 1. Phase 1: Find intersection point in the cycle (like detecting cycle in linked list)
         * 2. Phase 2: Find the entrance to the cycle (which is our duplicate number)
         * 
         * Time Complexity: O(n)
         * Space Complexity: O(1) - meets the constant space requirement!
         * 
         * @param nums Array of n+1 integers in range [1,n]
         * @return The duplicate number
         */
        public int findDuplicate(int[] nums) {
            // Phase 1: Finding intersection point in the cycle
            // Use two pointers: slow moves 1 step, fast moves 2 steps
            int slow = nums[0];
            int fast = nums[0];
            
            // Move until they meet inside the cycle
            do {
                slow = nums[slow];           // Move 1 step
                fast = nums[nums[fast]];     // Move 2 steps
            } while (slow != fast);
            
            // Phase 2: Finding the entrance to the cycle
            // Move one pointer to start, keep other at intersection
            // Move both at same speed until they meet at cycle entrance
            slow = nums[0];                  // Reset slow to start
            while (slow != fast) {
                slow = nums[slow];           // Move 1 step
                fast = nums[fast];           // Move 1 step
            }
            
            // The meeting point is the duplicate number
            return slow;
        }
        
        /**
         * Solution 2: HashSet Approach (Simple but violates space constraint)
         * 
         * This solution works but uses O(n) extra space, violating the problem constraint.
         * Included for educational comparison.
         * 
         * Time Complexity: O(n)
         * Space Complexity: O(n) - VIOLATES the constant space requirement
         */
        public int findDuplicateHashSet(int[] nums) {
            HashSet<Integer> set = new HashSet<>();
            
            for (Integer num : nums) {
                if (set.contains(num)) {
                    return num;
                } else {
                    set.add(num);
                }
            }
            return -1; // Should never reach here given problem constraints
        }
        
        /**
         * Solution 3: Binary Search on Value Range (Alternative O(1) space solution)
         * 
         * Since numbers are in range [1,n], we can binary search on this range.
         * For each mid value, count how many numbers <= mid.
         * If count > mid, duplicate is in [1,mid], else in [mid+1,n].
         * 
         * Time Complexity: O(n log n)
         * Space Complexity: O(1)
         */
        public int findDuplicateBinarySearch(int[] nums) {
            int left = 1;
            int right = nums.length - 1;
            
            while (left < right) {
                int mid = left + (right - left) / 2;
                int count = 0;
                
                // Count how many numbers are <= mid
                for (int num : nums) {
                    if (num <= mid) {
                        count++;
                    }
                }
                
                // If count > mid, duplicate is in [left, mid]
                if (count > mid) {
                    right = mid;
                } else {
                    // Otherwise, duplicate is in [mid + 1, right]
                    left = mid + 1;
                }
            }
            
            return left;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test cases from LeetCode examples
        int[][] testCases = {
            {1, 3, 4, 2, 2},        // Example 1: duplicate is 2
            {3, 1, 3, 4, 2},        // Example 2: duplicate is 3
            {3, 3, 3, 3, 3},        // Example 3: all same number
            {1, 1},                 // Edge case: minimal array
            {1, 4, 4, 2, 4},        // Multiple occurrences of duplicate
            {2, 5, 9, 6, 9, 3, 8, 9, 7, 1}, // Larger array
            {1, 2, 3, 4, 5, 5}      // Duplicate at end
        };
        
        int[] expected = {2, 3, 3, 1, 4, 9, 5};
        
        String[] descriptions = {
            "LeetCode Example 1: [1,3,4,2,2] - duplicate 2",
            "LeetCode Example 2: [3,1,3,4,2] - duplicate 3", 
            "LeetCode Example 3: [3,3,3,3,3] - all same",
            "Edge case: Minimal array [1,1]",
            "Multiple occurrences: [1,4,4,2,4] - duplicate 4",
            "Larger array: duplicate 9",
            "Duplicate at end: [1,2,3,4,5,5] - duplicate 5"
        };
        
        System.out.println("=== LeetCode 287: Find the Duplicate Number Test Results ===\n");
        
        int passedTests = 0;
        for (int i = 0; i < testCases.length; i++) {
            // Test the optimal Floyd's algorithm
            int result1 = solution.findDuplicate(testCases[i]);
            
            // Test the binary search approach
            int result2 = solution.findDuplicateBinarySearch(testCases[i]);
            
            // Test the HashSet approach (for comparison)
            int result3 = solution.findDuplicateHashSet(testCases[i]);
            
            boolean passed = (result1 == expected[i] && result2 == expected[i] && result3 == expected[i]);
            if (passed) passedTests++;
            
            System.out.printf("Test Case %d: %s\n", i + 1, descriptions[i]);
            System.out.printf("Input:               %s\n", Arrays.toString(testCases[i]));
            System.out.printf("Floyd's Algorithm:   %d\n", result1);
            System.out.printf("Binary Search:       %d\n", result2);
            System.out.printf("HashSet (violates):  %d\n", result3);
            System.out.printf("Expected:            %d\n", expected[i]);
            System.out.printf("Status:              %s\n", passed ? "✅ PASSED" : "❌ FAILED");
            System.out.println();
        }
        
        System.out.printf("=== Summary ===\n");
        System.out.printf("Total Tests: %d\n", testCases.length);
        System.out.printf("Passed: %d\n", passedTests);
        System.out.printf("Failed: %d\n", testCases.length - passedTests);
        System.out.printf("Success Rate: %.1f%%\n", (passedTests * 100.0) / testCases.length);
        
        System.out.println("\n=== Algorithm Comparison ===");
        System.out.println("1. Floyd's Tortoise & Hare: O(n) time, O(1) space ✅ OPTIMAL");
        System.out.println("   - Meets all constraints: no array modification, constant space");
        System.out.println("   - Models problem as cycle detection in implicit linked list");
        System.out.println();
        System.out.println("2. Binary Search on Range: O(n log n) time, O(1) space ✅ Valid");
        System.out.println("   - Meets space constraint but slower than Floyd's");
        System.out.println("   - Uses pigeonhole principle with counting");
        System.out.println();
        System.out.println("3. HashSet Approach: O(n) time, O(n) space ❌ Violates constraint");
        System.out.println("   - Simple but uses extra space, violates problem requirements");
        System.out.println();
        System.out.println("🏆 Floyd's Cycle Detection is the optimal solution for this problem!");
        
        System.out.println("\n=== Floyd's Algorithm Explanation ===");
        System.out.println("Think of the array as a linked list: nums[i] -> nums[nums[i]]");
        System.out.println("Since there's a duplicate, there must be a cycle in this path.");
        System.out.println("Phase 1: Detect cycle exists (slow/fast pointers meet)");
        System.out.println("Phase 2: Find cycle entrance (reset one pointer, move both at same speed)");
        System.out.println("The cycle entrance is our duplicate number!");
    }
}

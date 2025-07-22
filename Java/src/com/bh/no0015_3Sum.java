package com.bh;

import java.util.*;

/**
 * LeetCode 15: 3Sum
 * 
 * Problem Description:
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * Solution Approaches:
 * 1. Sort + Two Pointers - O(n²)
 * 2. HashMap - O(n²)
 * 3. Brute Force - O(n³)
 * 
 * Core Idea:
 * - Sort the array first, then fix the first number and use two pointers 
 *   to find two numbers in the remaining array that sum to the target
 * - Skip duplicate elements to avoid duplicate triplets
 */
public class no0015_3Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();
        Solution2 solution2 = new Solution2();
        Solution3 solution3 = new Solution3();

        // Example 1
        int[] nums1 = {-1,0,1,2,-1,-4};
        System.out.println("=== Example 1 ===");
        System.out.println("Input: nums = [-1,0,1,2,-1,-4]");
        
        List<List<Integer>> result1_1 = solution.threeSum(nums1.clone());
        System.out.println("Solution 1 (Two Pointers): " + result1_1);
        
        List<List<Integer>> result1_2 = solution2.threeSum(nums1.clone());
        System.out.println("Solution 2 (HashMap): " + result1_2);
        
        List<List<Integer>> result1_3 = solution3.threeSum(nums1.clone());
        System.out.println("Solution 3 (Brute Force): " + result1_3);
        
        System.out.println("Expected: [[-1,-1,2],[-1,0,1]]");
        System.out.println();

        // Example 2
        int[] nums2 = {0,1,1};
        System.out.println("=== Example 2 ===");
        System.out.println("Input: nums = [0,1,1]");
        
        List<List<Integer>> result2_1 = solution.threeSum(nums2.clone());
        System.out.println("Solution 1 (Two Pointers): " + result2_1);
        
        List<List<Integer>> result2_2 = solution2.threeSum(nums2.clone());
        System.out.println("Solution 2 (HashMap): " + result2_2);
        
        List<List<Integer>> result2_3 = solution3.threeSum(nums2.clone());
        System.out.println("Solution 3 (Brute Force): " + result2_3);
        
        System.out.println("Expected: []");
        System.out.println();

        // Example 3
        int[] nums3 = {0,0,0};
        System.out.println("=== Example 3 ===");
        System.out.println("Input: nums = [0,0,0]");
        
        List<List<Integer>> result3_1 = solution.threeSum(nums3.clone());
        System.out.println("Solution 1 (Two Pointers): " + result3_1);
        
        List<List<Integer>> result3_2 = solution2.threeSum(nums3.clone());
        System.out.println("Solution 2 (HashMap): " + result3_2);
        
        List<List<Integer>> result3_3 = solution3.threeSum(nums3.clone());
        System.out.println("Solution 3 (Brute Force): " + result3_3);
        
        System.out.println("Expected: [[0,0,0]]");
        System.out.println();

        // Additional test case
        int[] nums4 = {-2,0,1,1,2};
        System.out.println("=== Additional Test ===");
        System.out.println("Input: nums = [-2,0,1,1,2]");
        
        List<List<Integer>> result4_1 = solution.threeSum(nums4.clone());
        System.out.println("Solution 1 (Two Pointers): " + result4_1);
        
        System.out.println("Expected: [[-2,0,2],[-2,1,1]]");
        System.out.println();
    }

    // ========== Solution 1: Sort + Two Pointers (Optimal) ==========
    /**
     * Solution 1: Sort + Two Pointers (Optimal)
     * 
     * Algorithm:
     * 1. Sort the array first
     * 2. Iterate through the array, for each element nums[i], use two pointers 
     *    to find two numbers in the remaining subarray that sum to -nums[i]
     * 3. Skip duplicate elements to avoid duplicate triplets
     * 
     * Time Complexity: O(n²)
     * - Sorting: O(n log n)
     * - Two nested loops: O(n²)
     * - Overall: O(n²)
     * 
     * Space Complexity: O(1) 
     * - Only uses constant extra space besides the output array
     */
    static class Solution {
        /**
         * Find all unique triplets in the array which gives the sum of zero.
         * 
         * @param nums input integer array
         * @return list of all triplets that sum to zero
         */
        public List<List<Integer>> threeSum(int[] nums) {
            List<List<Integer>> res = new ArrayList<>();
            
            // Edge case check
            if (nums == null || nums.length < 3) {
                return res;
            }
            
            // Step 1: Sort the array
            Arrays.sort(nums);
            int n = nums.length;
            
            // Step 2: Iterate through each possible first element
            for (int i = 0; i < n - 2; i++) {
                // Skip duplicate first elements
                if (i > 0 && nums[i] == nums[i-1]) {
                    continue;
                }
                
                // Early termination optimization
                // If the sum of the smallest three numbers is greater than 0, no solution possible
                if (nums[i] + nums[i+1] + nums[i+2] > 0) {
                    break;
                }
                
                // If the sum of current number and the largest two numbers is less than 0, current number is too small
                if (nums[i] + nums[n-2] + nums[n-1] < 0) {
                    continue;
                }
                
                // Step 3: Use two pointers in remaining array
                int left = i + 1;      // left pointer
                int right = n - 1;     // right pointer
                
                while (left < right) {
                    int sum = nums[i] + nums[left] + nums[right];
                    
                    if (sum == 0) {
                        // Found a solution
                        res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                        
                        // Skip duplicate left elements
                        while (left < right && nums[left] == nums[left+1]) {
                            left++;
                        }
                        // Skip duplicate right elements
                        while (left < right && nums[right] == nums[right-1]) {
                            right--;
                        }
                        
                        // Move both pointers
                        left++;
                        right--;
                    } else if (sum < 0) {
                        // Sum too small, move left pointer
                        left++;
                    } else {
                        // Sum too large, move right pointer
                        right--;
                    }
                }
            }
            
            return res;
        }
    }

    // ========== Solution 2: HashMap Approach ==========
    /**
     * Solution 2: HashMap Approach
     * 
     * Algorithm:
     * 1. For each pair (i, j), check if -(nums[i] + nums[j]) exists in hashmap
     * 2. Use Set to avoid duplicate triplets
     * 
     * Time Complexity: O(n²)
     * Space Complexity: O(n)
     */
    static class Solution2 {
        public List<List<Integer>> threeSum(int[] nums) {
            if (nums == null || nums.length < 3) {
                return new ArrayList<>();
            }
            
            Set<List<Integer>> result = new HashSet<>();
            int n = nums.length;
            
            // Process each pair (i, j)
            for (int i = 0; i < n - 2; i++) {
                Set<Integer> seen = new HashSet<>();
                
                for (int j = i + 1; j < n; j++) {
                    int target = -(nums[i] + nums[j]);
                    
                    if (seen.contains(target)) {
                        // Found a triplet, sort it before adding to result set
                        List<Integer> triplet = Arrays.asList(nums[i], nums[j], target);
                        Collections.sort(triplet);
                        result.add(triplet);
                    }
                    
                    seen.add(nums[j]);
                }
            }
            
            return new ArrayList<>(result);
        }
    }

    // ========== Solution 3: Brute Force (For Understanding) ==========
    /**
     * Solution 3: Brute Force (For Understanding)
     * 
     * Algorithm:
     * Use three nested loops to check all possible triplets
     * 
     * Time Complexity: O(n³)
     * Space Complexity: O(1)
     */
    static class Solution3 {
        public List<List<Integer>> threeSum(int[] nums) {
            if (nums == null || nums.length < 3) {
                return new ArrayList<>();
            }
            
            Set<List<Integer>> result = new HashSet<>();
            int n = nums.length;
            
            // Three nested loops to check all combinations
            for (int i = 0; i < n - 2; i++) {
                for (int j = i + 1; j < n - 1; j++) {
                    for (int k = j + 1; k < n; k++) {
                        if (nums[i] + nums[j] + nums[k] == 0) {
                            List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                            Collections.sort(triplet);
                            result.add(triplet);
                        }
                    }
                }
            }
            
            return new ArrayList<>(result);
        }
    }
}



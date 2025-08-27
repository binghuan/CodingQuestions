package com.bh;

import java.util.HashMap;

/**
 * LeetCode 1679. Max Number of K-Sum Pairs
 * You are given an integer array nums and an integer k.
 * In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.
 * Return the maximum number of operations you can perform on the array.
 */
public class no1679_Max_Number_of_K_Sum_Pairs {
    /**
     * Returns the maximum number of operations to remove pairs that sum to k.
     * Uses a HashMap to store the frequency of each number.
     * For each number, checks if its complement (k - num) exists in the map.
     * If so, a pair is found and both numbers are removed from consideration.
     * Otherwise, the number is added to the map for future pairing.
     *
     * Time Complexity: O(n), where n is the length of nums.
     * Space Complexity: O(n), for the HashMap storing frequencies.
     *
     * @param nums the input array
     * @param k the target sum
     * @return maximum number of operations
     */
    public static int maxOperations(int[] nums, int k) {
        // HashMap to store the frequency of each number
        HashMap<Integer, Integer> map = new HashMap<>();
        int count = 0;
        for (int num : nums) {
            int complement = k - num;
            // If complement exists, form a pair and decrease its count
            if (map.getOrDefault(complement, 0) > 0) {
                count++;
                map.put(complement, map.get(complement) - 1);
            } else {
                // Otherwise, add current number to the map
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
        }
        return count;
    }

    /**
     * Main function to run test cases.
     */
    public static void main(String[] args) {
        // Test case 1
        int[] nums1 = {1, 2, 3, 4};
        int k1 = 5;
        System.out.println("Test case 1: " + (maxOperations(nums1, k1) == 2)); // Expected: true

        // Test case 2
        int[] nums2 = {3, 1, 3, 4, 3};
        int k2 = 6;
        System.out.println("Test case 2: " + (maxOperations(nums2, k2) == 1)); // Expected: true

        // Test case 3: No pairs
        int[] nums3 = {1, 1, 1, 1};
        int k3 = 3;
        System.out.println("Test case 3: " + (maxOperations(nums3, k3) == 0)); // Expected: true

        // Test case 4: Multiple pairs
        int[] nums4 = {2, 2, 2, 2};
        int k4 = 4;
        System.out.println("Test case 4: " + (maxOperations(nums4, k4) == 2)); // Expected: true

        // Test case 5: Large k
        int[] nums5 = {1000000000, 999999999, 1, 2};
        int k5 = 1000000001;
        System.out.println("Test case 5: " + (maxOperations(nums5, k5) == 2)); // Expected: true
    }
}

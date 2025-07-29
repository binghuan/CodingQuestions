package com.bh;

/**
 * LeetCode 704: Binary Search
 * Given a sorted array of integers nums and an integer target, return the index of target if it exists, otherwise return -1.
 * The algorithm must have O(log n) runtime complexity.
 */
public class no0704_Binary_Search {
    static class Solution {
        public int search(int[] nums, int target) {
            int left = 0, right = nums.length - 1;
            while (left <= right) {
                int mid = left + (right - left) / 2;
                if (nums[mid] == target) return mid;
                else if (nums[mid] < target) left = mid + 1;
                else right = mid - 1;
            }
            return -1;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][] testCases = {{-1, 0, 3, 5, 9, 12}, {-1, 0, 3, 5, 9, 12}, {1}, {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}};
        int[] targets = {9, 2, 1, 7};
        int[] expected = {4, -1, 0, 6};
        for (int i = 0; i < testCases.length; i++) {
            int result = solution.search(testCases[i], targets[i]);
            System.out.println("nums: " + java.util.Arrays.toString(testCases[i]) + ", target: " + targets[i] + " | Output: " + result + " | Expected: " + expected[i]);
        }
    }
}


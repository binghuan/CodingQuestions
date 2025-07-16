

package com.bh;

public class no0004_Media_of_Two_Sorted_Arrays {

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1
        int[] nums1_1 = {1, 3};
        int[] nums2_1 = {2};
        double result1 = solution.findMedianSortedArrays(nums1_1, nums2_1);
        System.out.println("Example 1:");
        System.out.println("Input: nums1 = [1,3], nums2 = [2]");
        System.out.println("Output: " + result1);
        System.out.println("Expected: 2.0");
        System.out.println("Test 1 " + (Math.abs(result1 - 2.0) < 1e-5 ? "PASSED" : "FAILED"));
        System.out.println();

        // Example 2
        int[] nums1_2 = {1, 2};
        int[] nums2_2 = {3, 4};
        double result2 = solution.findMedianSortedArrays(nums1_2, nums2_2);
        System.out.println("Example 2:");
        System.out.println("Input: nums1 = [1,2], nums2 = [3,4]");
        System.out.println("Output: " + result2);
        System.out.println("Expected: 2.5");
        System.out.println("Test 2 " + (Math.abs(result2 - 2.5) < 1e-5 ? "PASSED" : "FAILED"));
        System.out.println();

        // Additional test case: one array empty
        int[] nums1_3 = {};
        int[] nums2_3 = {1};
        double result3 = solution.findMedianSortedArrays(nums1_3, nums2_3);
        System.out.println("Test 3:");
        System.out.println("Input: nums1 = [], nums2 = [1]");
        System.out.println("Output: " + result3);
        System.out.println("Expected: 1.0");
        System.out.println("Test 3 " + (Math.abs(result3 - 1.0) < 1e-5 ? "PASSED" : "FAILED"));
        System.out.println();

        // Additional test case: different lengths
        int[] nums1_4 = {1, 2, 3, 4, 5};
        int[] nums2_4 = {6, 7, 8, 9, 10, 11};
        double result4 = solution.findMedianSortedArrays(nums1_4, nums2_4);
        System.out.println("Test 4:");
        System.out.println("Input: nums1 = [1,2,3,4,5], nums2 = [6,7,8,9,10,11]");
        System.out.println("Output: " + result4);
        System.out.println("Expected: 6.0");
        System.out.println("Test 4 " + (Math.abs(result4 - 6.0) < 1e-5 ? "PASSED" : "FAILED"));
    }

    static class Solution {
        /**
         * Find the median of two sorted arrays in O(log(min(m, n))) time.
         * Binary search on the shorter array to partition both arrays such that
         * left part has the same number of elements as the right part (or one more).
         *
         * Steps:
         * 1. Ensure nums1 is the shorter array.
         * 2. Binary search on nums1: partition at i, partition nums2 at j = (m + n + 1) / 2 - i
         * 3. Check if maxLeft1 <= minRight2 and maxLeft2 <= minRight1
         *    - If so, found the correct partition, compute median.
         *    - Else, adjust binary search range.
         */
        public double findMedianSortedArrays(int[] nums1, int[] nums2) {
            if (nums1.length > nums2.length) {
                // Always binary search on the shorter array
                return findMedianSortedArrays(nums2, nums1);
            }
            int m = nums1.length;
            int n = nums2.length;
            int left = 0, right = m;
            while (left <= right) {
                int i = (left + right) / 2;
                int j = (m + n + 1) / 2 - i;

                int maxLeft1 = (i == 0) ? Integer.MIN_VALUE : nums1[i - 1];
                int minRight1 = (i == m) ? Integer.MAX_VALUE : nums1[i];
                int maxLeft2 = (j == 0) ? Integer.MIN_VALUE : nums2[j - 1];
                int minRight2 = (j == n) ? Integer.MAX_VALUE : nums2[j];

                if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
                    // Found correct partition
                    if ((m + n) % 2 == 0) {
                        return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2.0;
                    } else {
                        return Math.max(maxLeft1, maxLeft2);
                    }
                } else if (maxLeft1 > minRight2) {
                    right = i - 1;
                } else {
                    left = i + 1;
                }
            }
            throw new IllegalArgumentException("Input arrays are not sorted or invalid");
        }
    }
}



package com.bh;

public class no0410_Split_Array_Largest_Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1
        int[] nums1 = {7,2,5,10,8};
        int k1 = 2;
        int result1 = solution.splitArray(nums1, k1);
        System.out.println("Example 1:");
        System.out.println("Input: nums = [7,2,5,10,8], k = 2");
        System.out.println("Output: " + result1);
        System.out.println("Expected: 18");
        System.out.println("Test 1 " + (result1 == 18 ? "PASSED" : "FAILED"));
        System.out.println();

        // Example 2
        int[] nums2 = {1,2,3,4,5};
        int k2 = 2;
        int result2 = solution.splitArray(nums2, k2);
        System.out.println("Example 2:");
        System.out.println("Input: nums = [1,2,3,4,5], k = 2");
        System.out.println("Output: " + result2);
        System.out.println("Expected: 9");
        System.out.println("Test 2 " + (result2 == 9 ? "PASSED" : "FAILED"));
        System.out.println();

        // Additional test case: k = 1 (whole array)
        int[] nums3 = {1,2,3,4,5};
        int k3 = 1;
        int result3 = solution.splitArray(nums3, k3);
        System.out.println("Test 3:");
        System.out.println("Input: nums = [1,2,3,4,5], k = 1");
        System.out.println("Output: " + result3);
        System.out.println("Expected: 15");
        System.out.println("Test 3 " + (result3 == 15 ? "PASSED" : "FAILED"));
        System.out.println();

        // Additional test case: k = nums.length (each element its own subarray)
        int[] nums4 = {1,4,4};
        int k4 = 3;
        int result4 = solution.splitArray(nums4, k4);
        System.out.println("Test 4:");
        System.out.println("Input: nums = [1,4,4], k = 3");
        System.out.println("Output: " + result4);
        System.out.println("Expected: 4");
        System.out.println("Test 4 " + (result4 == 4 ? "PASSED" : "FAILED"));
    }

    static class Solution {
        /**
         * Binary search + greedy to minimize the largest subarray sum after splitting into k parts.
         * Time: O(n log(sum(nums) - max(nums))), Space: O(1)
         */
        public int splitArray(int[] nums, int k) {
            int left = 0, right = 0;
            for (int num : nums) {
                left = Math.max(left, num); // at least the max element
                right += num; // at most the sum of all elements
            }
            while (left < right) {
                int mid = left + (right - left) / 2;
                if (canSplit(nums, k, mid)) {
                    right = mid;
                } else {
                    left = mid + 1;
                }
            }
            return left;
        }

        // Helper: can we split into <= k subarrays with max sum <= maxSum?
        private boolean canSplit(int[] nums, int k, int maxSum) {
            int count = 1, currSum = 0;
            for (int num : nums) {
                if (currSum + num > maxSum) {
                    count++;
                    currSum = num;
                    if (count > k) return false;
                } else {
                    currSum += num;
                }
            }
            return true;
        }
    }
}




package com.bh;

import java.util.*;

public class no0015_3Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1
        int[] nums1 = {-1,0,1,2,-1,-4};
        List<List<Integer>> result1 = solution.threeSum(nums1);
        System.out.println("Example 1:");
        System.out.println("Input: nums = [-1,0,1,2,-1,-4]");
        System.out.println("Output: " + result1);
        System.out.println("Expected: [[-1,-1,2],[-1,0,1]]");
        System.out.println();

        // Example 2
        int[] nums2 = {0,1,1};
        List<List<Integer>> result2 = solution.threeSum(nums2);
        System.out.println("Example 2:");
        System.out.println("Input: nums = [0,1,1]");
        System.out.println("Output: " + result2);
        System.out.println("Expected: []");
        System.out.println();

        // Example 3
        int[] nums3 = {0,0,0};
        List<List<Integer>> result3 = solution.threeSum(nums3);
        System.out.println("Example 3:");
        System.out.println("Input: nums = [0,0,0]");
        System.out.println("Output: " + result3);
        System.out.println("Expected: [[0,0,0]]");
        System.out.println();
    }

    static class Solution {
        /**
         * Find all unique triplets in the array which gives the sum of zero.
         * Sort the array, then use two pointers for each fixed i.
         * Skip duplicates for i, left, and right.
         * Time: O(n^2), Space: O(n) for output.
         */
        public List<List<Integer>> threeSum(int[] nums) {
            List<List<Integer>> res = new ArrayList<>();
            Arrays.sort(nums);
            int n = nums.length;
            for (int i = 0; i < n - 2; i++) {
                if (i > 0 && nums[i] == nums[i-1]) continue; // skip duplicate i
                int left = i + 1, right = n - 1;
                while (left < right) {
                    int sum = nums[i] + nums[left] + nums[right];
                    if (sum == 0) {
                        res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                        // skip duplicates for left and right
                        while (left < right && nums[left] == nums[left+1]) left++;
                        while (left < right && nums[right] == nums[right-1]) right--;
                        left++;
                        right--;
                    } else if (sum < 0) {
                        left++;
                    } else {
                        right--;
                    }
                }
            }
            return res;
        }
    }
}



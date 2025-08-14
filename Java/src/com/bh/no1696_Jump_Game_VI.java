package com.bh;

import java.util.Arrays;
import java.util.ArrayDeque;
import java.util.Deque;

/**
 * LeetCode 1696: Jump Game VI
 *
 * DP with a monotonic deque to maintain the best dp value in the last k indices.
 * Time: O(n), Space: O(n)
 */
public class no1696_Jump_Game_VI {

    static
    class Solution {

        /**
         * Returns the maximum score you can get when jumping with step limit k.
         *
         * dp[i] = nums[i] + max(dp[j]) for j in [i-k, i-1].
         * Maintain a deque of indices with decreasing dp values, and remove
         * indices that are out of the window [i-k, i-1].
         */
        public int maxResult(int[] nums, int k) {
            int n = nums.length;
            int[] dp = new int[n];
            dp[0] = nums[0];

            Deque<Integer> deque = new ArrayDeque<>();
            deque.addLast(0); // store indices, dp[deque] is decreasing

            for (int i = 1; i < n; i++) {
                // Remove indices out of window
                while (!deque.isEmpty() && deque.peekFirst() < i - k) {
                    deque.pollFirst();
                }

                // Best previous is at the front
                dp[i] = nums[i] + dp[deque.peekFirst()];

                // Maintain decreasing deque by dp value
                while (!deque.isEmpty() && dp[deque.peekLast()] <= dp[i]) {
                    deque.pollLast();
                }
                deque.addLast(i);
            }

            return dp[n - 1];
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Example 1
        int[] nums1 = {1, -1, -2, 4, -7, 3};
        int k1 = 2;
        System.out.println("INPUT:  " + Arrays.toString(nums1) + ", k=" + k1);
        System.out.println("OUTPUT: " + solution.maxResult(nums1, k1)); // 7

        // Example 2
        int[] nums2 = {10, -5, -2, 4, 0, 3};
        int k2 = 3;
        System.out.println("INPUT:  " + Arrays.toString(nums2) + ", k=" + k2);
        System.out.println("OUTPUT: " + solution.maxResult(nums2, k2)); // 17

        // Example 3
        int[] nums3 = {1, -5, -20, 4, -1, 3, -6, -3};
        int k3 = 2;
        System.out.println("INPUT:  " + Arrays.toString(nums3) + ", k=" + k3);
        System.out.println("OUTPUT: " + solution.maxResult(nums3, k3)); // 0
    }
}

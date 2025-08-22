package com.bh;

import java.util.*;

/**
 * LeetCode 239: Sliding Window Maximum
 * Monotonic deque solution: O(n) time, O(k) space.
 * Deque stores indices, maintaining nums[deque] in decreasing order.
 */
public class no0239_Sliding_Window_Maximum {

	static class Solution {
		public int[] maxSlidingWindow(int[] nums, int k) {
			int n = nums.length;
			if (k == 1) return Arrays.copyOf(nums, n);

			int[] ans = new int[n - k + 1];
			Deque<Integer> dq = new ArrayDeque<>(); // stores indices

			for (int i = 0; i < n; i++) {
				// Remove indices out of window (left side)
				while (!dq.isEmpty() && dq.peekFirst() <= i - k) dq.pollFirst();

				// Maintain decreasing order: pop smaller values from the back
				while (!dq.isEmpty() && nums[dq.peekLast()] <= nums[i]) dq.pollLast();

				dq.offerLast(i);

				// Record answer starting when first window is complete
				if (i >= k - 1) ans[i - k + 1] = nums[dq.peekFirst()];
			}
			return ans;
		}
	}

	// Simple tests
	public static void main(String[] args) {
		Solution sol = new Solution();

		int[] nums1 = {1,3,-1,-3,5,3,6,7};
		System.out.println("Example 1 -> " + Arrays.toString(sol.maxSlidingWindow(nums1, 3))); // [3,3,5,5,6,7]

		int[] nums2 = {1};
		System.out.println("Example 2 -> " + Arrays.toString(sol.maxSlidingWindow(nums2, 1))); // [1]
	}
}

package com.bh;

public class no0198_House_Robber {
    /**
     * Returns the maximum amount of money that can be robbed without alerting the police.
     * Uses dynamic programming to solve the problem efficiently.
     * @param nums array representing the amount of money at each house
     * @return maximum amount that can be robbed
     */
    public int rob(int[] nums) {
        if (nums == null || nums.length == 0) return 0;
        int n = nums.length;
        if (n == 1) return nums[0];
        int[] dp = new int[n];
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);
        for (int i = 2; i < n; i++) {
            // For each house, choose to rob it (add its value to dp[i-2]) or skip it (take dp[i-1])
            dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);
        }
        return dp[n-1];
    }

    public static void main(String[] args) {
        no0198_House_Robber solver = new no0198_House_Robber();
        // Test case 1: [1,2,3,1] => 4
        int[] nums1 = {1,2,3,1};
        System.out.println("Test case 1: " + solver.rob(nums1)); // Expected: 4

        // Test case 2: [2,7,9,3,1] => 12
        int[] nums2 = {2,7,9,3,1};
        System.out.println("Test case 2: " + solver.rob(nums2)); // Expected: 12

        // Test case 3: [2,1,1,2] => 4
        int[] nums3 = {2,1,1,2};
        System.out.println("Test case 3: " + solver.rob(nums3)); // Expected: 4

        // Test case 4: [0] => 0
        int[] nums4 = {0};
        System.out.println("Test case 4: " + solver.rob(nums4)); // Expected: 0

        // Test case 5: [10,1,1,10] => 20
        int[] nums5 = {10,1,1,10};
        System.out.println("Test case 5: " + solver.rob(nums5)); // Expected: 20
    }
}

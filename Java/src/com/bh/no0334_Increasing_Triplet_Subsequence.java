package com.bh;

public class no0334_Increasing_Triplet_Subsequence {
    /**
     * Returns true if there exist indices i < j < k such that nums[i] < nums[j] < nums[k].
     * O(n) time, O(1) extra space.
     * Idea: track the smallest first element and the smallest possible second element of an
     * increasing pair seen so far. When we find a number bigger than both, a triplet exists.
     */
    public boolean increasingTriplet(int[] nums) {
        if (nums == null || nums.length < 3) return false;
        int first = Integer.MAX_VALUE;  // smallest value seen so far
        int second = Integer.MAX_VALUE; // smallest possible middle value (> first)
        for (int x : nums) {
            if (x <= first) {
                // New smallest value
                first = x;
            } else if (x <= second) {
                // x is greater than first but improves (reduces) the best second
                second = x;
            } else {
                // x > first and x > second -> found triplet first < second < x
                return true;
            }
        }
        return false;
    }

    // Helper to format arrays for output
    private static String arrToString(int[] arr) {
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < arr.length; i++) {
            if (i > 0) sb.append(",");
            sb.append(arr[i]);
        }
        sb.append("]");
        return sb.toString();
    }

    public static void main(String[] args) {
        no0334_Increasing_Triplet_Subsequence solution = new no0334_Increasing_Triplet_Subsequence();

        // Sample test cases from problem statement
        int[][] tests = {
            {1,2,3,4,5},      // true
            {5,4,3,2,1},      // false
            {2,1,5,0,4,6},    // true
            {2,2,2,2,2},      // false (all equal)
            {1,2},            // false (length < 3)
            {1,1,2,0,3},      // true (1 < 2 < 3)
            {5,1,5,5,2,5,4},  // true (1,2,4)
            {-2,-1,-3,-4,0},  // true (-2,-1,0)
            {20, 100, 10, 12, 5, 13} // true (10,12,13)
        };
        for (int[] test : tests) {
            boolean ans = solution.increasingTriplet(test);
            System.out.println("Input:  " + arrToString(test));
            System.out.println("Output: " + ans);
            System.out.println();
        }
    }
}

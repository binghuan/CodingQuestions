package com.bh;

public class no0011_Container_With_Most_Water {

    static class Solution {
        public int maxArea(int[] height) {
            int left = 0;                  // left pointer
            int right = height.length - 1; // right pointer
            int maxArea = 0;

            while (left < right) {
                // compute current container height and width
                int h = Math.min(height[left], height[right]);
                int w = right - left;
                int area = h * w;

                // update maximum area
                maxArea = Math.max(maxArea, area);

                // move the shorter side inward; only this can potentially increase area
                if (height[left] < height[right]) {
                    left++;
                } else {
                    right--;
                }
            }

            return maxArea;
        }
    }

    // Helper to print arrays
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

    private static void runTest(Solution sol, int[] height, int expected) {
        int ans = sol.maxArea(height);
        System.out.println("Input:  " + arrToString(height));
        System.out.println("Output: " + ans + "  Expected: " + expected + (ans == expected ? "  OK" : "  Mismatch"));
        System.out.println();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();

        // Sample 1
        runTest(sol, new int[]{1,8,6,2,5,4,8,3,7}, 49);
        // Sample 2
        runTest(sol, new int[]{1,1}, 1);
        // All zeros
        runTest(sol, new int[]{0,0,0,0}, 0);
        // Increasing heights
        runTest(sol, new int[]{1,2,3,4,5,6}, 9); // between indices 0 and 5 => min(1,6)*5=5; better: 1&6=5, 2&6=8, 3&6=9, 4&6=8, 5&6=5 -> 9
        // Plateau
        runTest(sol, new int[]{5,5,5,5,5}, 20); // indices 0 & 4 => 5*4
        // Mixed small
        runTest(sol, new int[]{2,3,4,5,18,17,6}, 17); // optimum between indices 4 & 5: min(18,17)*1=17
    }
}

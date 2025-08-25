package com.bh;

public class no0238_Product_of_Array_Except_Self {
    /**
     * Returns an array answer where answer[i] is the product of all elements in nums except nums[i].
     * Constraints guarantee the result fits in 32-bit signed integer. No division used. O(n) time.
     * Space: O(1) extra (ignoring the output array) by reusing output to store prefix products first,
     * then multiplying by a running suffix product from the right.
     */
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] ans = new int[n];

        // ans[i] will hold product of all elements to the LEFT of i.
        ans[0] = 1; // nothing to the left of index 0
        for (int i = 1; i < n; i++) {
            ans[i] = ans[i - 1] * nums[i - 1];
        }

        // R accumulates the product of elements to the RIGHT of i.
        int R = 1; // nothing to the right of last index yet
        for (int i = n - 1; i >= 0; i--) {
            ans[i] = ans[i] * R; // multiply left product (already in ans[i]) by right product
            R *= nums[i];        // update right product for next iteration to the left
        }
        return ans;
    }

    // Helper to print array in [a,b,c] form
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
        no0238_Product_of_Array_Except_Self solution = new no0238_Product_of_Array_Except_Self();

        // Test case 1 (sample)
        int[] nums1 = {1, 2, 3, 4};
        System.out.println("Input:  " + arrToString(nums1));
        System.out.println("Output: " + arrToString(solution.productExceptSelf(nums1))); // Expected [24,12,8,6]
        System.out.println();

        // Test case 2 (sample with a zero)
        int[] nums2 = {-1, 1, 0, -3, 3};
        System.out.println("Input:  " + arrToString(nums2));
        System.out.println("Output: " + arrToString(solution.productExceptSelf(nums2))); // Expected [0,0,9,0,0]
        System.out.println();

        // Test case 3 (two zeros -> all zeros)
        int[] nums3 = {2, 0, 4, 0};
        System.out.println("Input:  " + arrToString(nums3));
        System.out.println("Output: " + arrToString(solution.productExceptSelf(nums3))); // Expected [0,0,0,0]
        System.out.println();

        // Test case 4 (negatives)
        int[] nums4 = {-2, -3, -4, -5};
        System.out.println("Input:  " + arrToString(nums4));
        System.out.println("Output: " + arrToString(solution.productExceptSelf(nums4))); // Expected [(-3*-4*-5)= -60, (-2*-4*-5)= -40, (-2*-3*-5)= -30, (-2*-3*-4)= -24]
        System.out.println();

        // Test case 5 (mixed)
        int[] nums5 = {5, 1, 10};
        System.out.println("Input:  " + arrToString(nums5));
        System.out.println("Output: " + arrToString(solution.productExceptSelf(nums5))); // Expected [10,50,5]
    }
}

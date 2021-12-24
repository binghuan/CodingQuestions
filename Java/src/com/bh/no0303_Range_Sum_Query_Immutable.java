package com.bh;

public class no0303_Range_Sum_Query_Immutable {

    static
    class NumArray {

        private int[] data;

        public NumArray(int[] nums) {
            data = nums;
        }

        public int sumRange(int left, int right) {

            int sum = 0;
            for (int i = left; i <= right; i++) {
                sum += data[i];
            }
            return sum;
        }
    }

    /**
     * Your NumArray object will be instantiated and called as such:
     * NumArray obj = new NumArray(nums);
     * int param_1 = obj.sumRange(left,right);
     */

    public static void main(String[] args) {

        NumArray numArray = new NumArray(new int[]{-2, 0, 3, -5, 2, -1});
        numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1
        numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1
        numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3

    }

}

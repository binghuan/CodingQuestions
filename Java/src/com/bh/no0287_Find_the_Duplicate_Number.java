package com.bh;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

public class no0287_Find_the_Duplicate_Number {
    static
    class Solution {
        public int findDuplicate(int[] nums) {

            HashSet<Integer> set = new HashSet<>();

            for (Integer num : nums){

                if(set.contains(num)) {
                    return num;
                } else {
                    set.add(num);
                }
            }
            return -1;
        }
    }

    public static void main(String[] args) {

        int[] nums = { 1,3,4,2,2 };
        Solution solution = new Solution();
        solution.findDuplicate(nums);
    }
}

package com.bh;

import java.util.HashSet;
import java.util.Set;

public class no0217_Contains_Duplicate {
    public boolean hasDuplicate(int[] nums) {

        // iterate through the array, and put it into set
        // if the set already has the value, return true
        // otherwise, return false
        // O(n)
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            if (set.contains(num)) {
                return true;
            }
            set.add(num);
        }

        return false;
    }

    public static void main(String[] args) {
        no0217_Contains_Duplicate solution = new no0217_Contains_Duplicate();
        System.out.println(solution.hasDuplicate(new int[]{1, 2, 3, 4}));
    }
}

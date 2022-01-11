package com.bh;

import java.util.HashMap;

// link: https://leetcode.com/problems/climbing-stairs/
public class no0070_Climbing_Stairs {

    static
    class Solution {
        HashMap<Integer, Integer> history = new HashMap<>();
        public int climbStairs(int n) {
            if(n == 1) {
                return 1;
            }
            if(n == 2) {
                return 2;
            }
            if(n <= 0) {
                return 0;
            }
            if(history.get(n) != null) {
                return history.get(n);
            }
            int steps = climbStairs(n-1) + climbStairs(n-2);
            history.put(n , steps);
            return steps;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int result = solution.climbStairs(3);
        System.out.println("OUTPUT:" + result);
    }

}

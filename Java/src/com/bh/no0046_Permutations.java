package com.bh;

import java.util.ArrayList;
import java.util.List;

public class no0046_Permutations {

    static
    class Solution {
        public List<List<Integer>> permute(int[] nums) {

            ArrayList<Integer> curr = new ArrayList<Integer>();
            ArrayList<Integer> numIndexInUse = new ArrayList<Integer>();
            ArrayList<List<Integer>> ans = new ArrayList<List<Integer>>();
            dfs(nums, curr, numIndexInUse, ans);

            return ans;
        }

        public void dfs(int[] nums, ArrayList<Integer> curr, ArrayList<Integer> numIndexInUse, ArrayList<List<Integer>> ans) {

            if (curr.size() == nums.length) {
                List<Integer> copy = new ArrayList<Integer>(curr);
                ans.add(copy);
                //System.out.println("Add:" + curr);
            } else {

                for (int i = 0; i < nums.length; i++) {
                    if (numIndexInUse.contains(i)) {
                        continue;
                    }

                    int number = nums[i];
                    curr.add(number);
                    numIndexInUse.add(i);

                    dfs(nums, curr, numIndexInUse, ans);

                    curr.remove(curr.size() - 1);
                    numIndexInUse.remove(numIndexInUse.size() - 1);
                }
            }
        }
    }

    public static void main(String[] args) {
        int nums[] = {1, 2, 3};
        Solution solution = new Solution();
        solution.permute(nums);

    }
}

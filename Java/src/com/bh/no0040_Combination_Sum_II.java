package com.bh;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

// reference: https://leetcode.com/problems/combination-sum-ii/solution/
public class no0040_Combination_Sum_II {
    static
    class Solution {
        public List<List<Integer>> combinationSum2(int[] candidates, int target) {
            List<List<Integer>> results = new ArrayList<>();
            LinkedList<Integer> comb = new LinkedList<>();

            Arrays.sort(candidates);

            backtrack(candidates, comb, target, 0, results);
            return results;
        }

        private void backtrack(int[] candidates,
                               LinkedList<Integer> comb,
                               Integer remain,
                               Integer curr,
                               List<List<Integer>> results) {
            if (remain == 0) {
                // copy the current combination to the final list.
                results.add(new ArrayList<Integer>(comb));
                return;
            }

            for (int nextCurr = curr; nextCurr < candidates.length; ++nextCurr) {

                if (nextCurr > curr && candidates[nextCurr] == candidates[nextCurr - 1]) {
                    continue;
                }

                Integer pick = candidates[nextCurr];
                // optimization: early stopping
                if (remain - pick < 0) {
                    break;
                }

                comb.addLast(pick);
                backtrack(candidates, comb, remain - pick, nextCurr + 1, results);
                comb.removeLast();
            }
        }
    }

    public static void main(String[] args) {
        int[] input = {10, 1, 2, 7, 6, 1, 5};
        int target = 8;
        no0040_Combination_Sum_II.Solution solution = new no0040_Combination_Sum_II.Solution();
        solution.combinationSum2(input, target);
    }
}

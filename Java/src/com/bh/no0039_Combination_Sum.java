package com.bh;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class no0039_Combination_Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();

        //Input: candidates = [2,3,6,7], target = 7
        solution.combinationSum(new int[]{2, 3, 6, 7}, 7);
    }

    static
    class Solution {
        public List<List<Integer>> combinationSum(int[] candidates, int target) {

            // sorting array
            Arrays.sort(candidates);
            System.out.println("INPUT: " + candidates.toString());

            List<Integer> currentCombination = new ArrayList<>();
            List<List<Integer>> output = new ArrayList<>();

            dfs(
                    candidates,
                    0,
                    target,
                    currentCombination,
                    output
            );

            System.out.println("OUTPUT: " + Arrays.toString(output.toArray()));
            return output;
        }

        private void dfs(
                int[] candidates,
                int startedIndex,
                int remainingSum,
                List<Integer> currentCombination,
                List<List<Integer>> answer
        ) {

            if (remainingSum == 0) {
                System.out.println("Add: " + Arrays.toString(currentCombination.toArray()));
                ArrayList cloned = new ArrayList(currentCombination);
                answer.add(cloned);
                return;
            }

            for (int i = startedIndex; i < candidates.length; i++) {
                int chosenNum = candidates[i];

                if (chosenNum > remainingSum) {
                    break;
                }

                currentCombination.add((chosenNum));

                dfs(
                        candidates,
                        i,
                        remainingSum - chosenNum,
                        currentCombination,
                        answer
                );
                currentCombination.remove(currentCombination.size() - 1);
            }
        }
    }

}


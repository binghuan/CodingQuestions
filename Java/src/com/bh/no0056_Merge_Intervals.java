package com.bh;

import java.util.*;

/**
 * LeetCode 56: Merge Intervals
 * Given an array of intervals, merge all overlapping intervals and return an array of the non-overlapping intervals.
 */
public class no0056_Merge_Intervals {
    static class Solution {
        public int[][] merge(int[][] intervals) {
            if (intervals.length == 0) return new int[0][0];
            // Sort intervals by start time
            Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
            List<int[]> merged = new ArrayList<>();
            int[] current = intervals[0];
            merged.add(current);
            for (int i = 1; i < intervals.length; i++) {
                int[] next = intervals[i];
                if (current[1] >= next[0]) {
                    // Overlapping intervals, merge them
                    current[1] = Math.max(current[1], next[1]);
                } else {
                    // No overlap, add to result
                    current = next;
                    merged.add(current);
                }
            }
            return merged.toArray(new int[merged.size()][]);
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[][][] testCases = {
            {{1,3},{2,6},{8,10},{15,18}},
            {{1,4},{4,5}},
            {{1,4}},
            {{1,4},{0,2},{3,5}},
            {{1,4},{2,3}},
            {{1,4},{0,4}}
        };
        int[][][] expected = {
            {{1,6},{8,10},{15,18}},
            {{1,5}},
            {{1,4}},
            {{0,5}},
            {{1,4}},
            {{0,4}}
        };
        for (int i = 0; i < testCases.length; i++) {
            int[][] result = solution.merge(testCases[i]);
            System.out.print("intervals: " + Arrays.deepToString(testCases[i]) + " | Output: " + Arrays.deepToString(result) + " | Expected: " + Arrays.deepToString(expected[i]));
            System.out.println();
        }
    }
}


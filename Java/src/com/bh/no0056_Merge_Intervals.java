package com.bh;

import java.util.*;

/**
 * LeetCode 56: Merge Intervals
 * 
 * Problem Description:
 * Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping 
 * intervals, and return an array of the non-overlapping intervals that cover all the 
 * intervals in the input.
 * 
 * Example:
 * Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
 * 
 * Visual representation:
 * Original intervals:     [1---3]
 *                             [2-----6]
 *                                       [8--10]
 *                                               [15--18]
 * 
 * After merging:          [1-------6]
 *                                       [8--10]
 *                                               [15--18]
 * 
 * Algorithm Approach:
 * 1. Sort intervals by their start time to process them in order
 * 2. Iterate through sorted intervals and check for overlaps
 * 3. If current interval overlaps with next, merge them
 * 4. If no overlap, add the next interval as a new separate interval
 * 
 * Key Insight:
 * Two intervals [a,b] and [c,d] overlap if b >= c (assuming a <= c after sorting)
 * When merging, the new interval is [a, max(b,d)]
 * 
 * Time Complexity: O(n log n) - dominated by sorting
 * Space Complexity: O(n) - for the result list
 */
public class no0056_Merge_Intervals {
    static class Solution {
        /**
         * Merge all overlapping intervals in the given array
         * 
         * Algorithm Steps:
         * 1. Handle edge case: empty input
         * 2. Sort intervals by start time to process in chronological order
         * 3. Initialize result with first interval
         * 4. For each subsequent interval:
         *    - If it overlaps with current interval: merge them
         *    - If no overlap: add as new separate interval
         * 5. Convert result list to array and return
         * 
         * @param intervals Array of intervals where each interval is [start, end]
         * @return Array of merged non-overlapping intervals
         */
        public int[][] merge(int[][] intervals) {
            // Edge case: empty input
            if (intervals.length == 0) return new int[0][0];
            
            // Step 1: Sort intervals by start time
            // This ensures we process intervals in chronological order
            // Lambda expression: (a -> a[0]) extracts start time for comparison
            Arrays.sort(intervals, Comparator.comparingInt(a -> a[0]));
            
            // Step 2: Initialize result list and add first interval
            List<int[]> merged = new ArrayList<>();
            int[] current = intervals[0];
            merged.add(current);
            
            // Step 3: Process remaining intervals
            for (int i = 1; i < intervals.length; i++) {
                int[] next = intervals[i];
                
                // Check for overlap: current.end >= next.start
                // Since intervals are sorted by start time, we only need this condition
                if (current[1] >= next[0]) {
                    // Overlapping intervals detected - merge them
                    // New end time is the maximum of both intervals' end times
                    current[1] = Math.max(current[1], next[1]);
                    
                    /*
                     * Example of merging:
                     * current = [1,3], next = [2,6]
                     * Since 3 >= 2, they overlap
                     * Merged interval: [1, max(3,6)] = [1,6]
                     */
                } else {
                    // No overlap - add next interval as new separate interval
                    current = next;
                    merged.add(current);
                    
                    /*
                     * Example of no overlap:
                     * current = [1,3], next = [4,6]
                     * Since 3 < 4, no overlap
                     * Keep both intervals separate
                     */
                }
            }
            
            // Step 4: Convert list to array and return
            return merged.toArray(new int[merged.size()][]);
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Comprehensive test cases covering different merging scenarios
        int[][][] testCases = {
            {{1,3},{2,6},{8,10},{15,18}},     // Standard overlapping case
            {{1,4},{4,5}},                    // Adjacent intervals (touching)
            {{1,4}},                          // Single interval
            {{1,4},{0,2},{3,5}},             // Multiple overlaps, unsorted
            {{1,4},{2,3}},                   // Complete containment
            {{1,4},{0,4}}                    // Partial overlap with same end
        };
        
        int[][][] expected = {
            {{1,6},{8,10},{15,18}},
            {{1,5}},
            {{1,4}},
            {{0,5}},
            {{1,4}},
            {{0,4}}
        };
        
        String[] descriptions = {
            "Standard case with overlapping intervals",
            "Adjacent intervals that touch at boundary",
            "Single interval - edge case",
            "Multiple overlaps with unsorted input",
            "One interval completely contained in another",
            "Partial overlap with same end time"
        };
        
        System.out.println("=== LeetCode 56: Merge Intervals Test Results ===\n");
        
        for (int i = 0; i < testCases.length; i++) {
            int[][] result = solution.merge(testCases[i]);
            boolean passed = Arrays.deepEquals(result, expected[i]);
            
            System.out.printf("Test Case %d: %s\n", i + 1, descriptions[i]);
            System.out.printf("Input:    %s\n", Arrays.deepToString(testCases[i]));
            System.out.printf("Output:   %s\n", Arrays.deepToString(result));
            System.out.printf("Expected: %s\n", Arrays.deepToString(expected[i]));
            System.out.printf("Status:   %s\n", passed ? "✅ PASSED" : "❌ FAILED");
            System.out.println();
        }
        
        // Additional explanation
        System.out.println("=== Algorithm Key Points ===");
        System.out.println("1. Sorting is crucial for correct merging");
        System.out.println("2. Two intervals [a,b] and [c,d] overlap if b >= c (after sorting)");
        System.out.println("3. Merged interval is [a, max(b,d)]");
        System.out.println("4. Adjacent intervals (b == c) are considered overlapping");
    }
}


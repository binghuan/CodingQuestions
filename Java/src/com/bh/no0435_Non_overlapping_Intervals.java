package com.bh;

import java.util.*;

public class no0435_Non_overlapping_Intervals {
    /**
     * Greedy approach (by end time):
     * Sort intervals by their end (ascending). Always pick the interval that ends earliest
     * (classic activity selection). Count how many we can keep non-overlapping; removals = n - kept.
     * Time: O(n log n) for sorting. Space: O(1) extra (ignoring sort in-place).
     */
    public int eraseOverlapIntervals(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) return 0;
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[1])); // sort by end
        int kept = 1; // keep first (earliest end)
        int prevEnd = intervals[0][1];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] >= prevEnd) { // non-overlapping, keep it
                kept++;
                prevEnd = intervals[i][1];
            }
            // else overlap -> skip (remove) current interval implicitly
        }
        return intervals.length - kept;
    }

    /**
     * Alternative greedy (sort by start, count removals directly):
     * When two intervals overlap, remove the one with the larger end to leave more room.
     * Returns same result, provided for comparison.
     */
    public int eraseOverlapIntervalsByStart(int[][] intervals) {
        if (intervals == null || intervals.length <= 1) return 0;
        Arrays.sort(intervals, Comparator.comparingInt(a -> a[0])); // sort by start
        int removals = 0;
        int prevEnd = intervals[0][1];
        for (int i = 1; i < intervals.length; i++) {
            if (intervals[i][0] < prevEnd) { // overlap
                removals++;
                // keep the interval with smaller end
                prevEnd = Math.min(prevEnd, intervals[i][1]);
            } else {
                prevEnd = intervals[i][1];
            }
        }
        return removals;
    }

    private static String intervalsToString(int[][] arr) {
        return Arrays.deepToString(arr);
    }

    // Deep copy helper because methods modify order via sorting
    private static int[][] copy(int[][] src) {
        int[][] cp = new int[src.length][];
        for (int i = 0; i < src.length; i++) cp[i] = Arrays.copyOf(src[i], 2);
        return cp;
    }

    public static void main(String[] args) {
        no0435_Non_overlapping_Intervals solution = new no0435_Non_overlapping_Intervals();

        int[][][] tests = {
            {{1,2},{2,3},{3,4},{1,3}},        // example 1 -> 1
            {{1,2},{1,2},{1,2}},              // example 2 -> 2
            {{1,2},{2,3}},                    // example 3 -> 0
            {{-5,-1},{-4,0},{0,2},{1,3}},     // overlaps & negatives
            {{1,100},{11,12},{13,14},{15,16}},// one large covering many small -> remove 1
            {{1,3},{2,4},{3,5},{4,6}},        // chain overlaps
            {{1,5},{2,3},{3,4}},              // remove big outer to keep two
            {{0,1}},                          // single
            {{1,2},{2,3},{3,4},{4,5}},        // all touching -> 0
            {{1,10},{2,3},{3,4},{4,5},{6,7}}, // remove the large interval only -> 1
        };
        int[] expected = {1,2,0,2,1,2,1,0,0,1};

        System.out.println("=== LeetCode 435: Non-overlapping Intervals Tests ===\n");
        for (int i = 0; i < tests.length; i++) {
            int[][] t1 = copy(tests[i]);
            int[][] t2 = copy(tests[i]);
            int ansEnd = solution.eraseOverlapIntervals(t1);
            int ansStart = solution.eraseOverlapIntervalsByStart(t2);
            boolean consistent = ansEnd == ansStart;
            boolean pass = ansEnd == expected[i];
            System.out.printf("Test %d:\n", i + 1);
            System.out.println("  Input:      " + intervalsToString(tests[i]));
            System.out.println("  Greedy-End: " + ansEnd);
            System.out.println("  Greedy-Start:" + ansStart);
            System.out.println("  Expected:   " + expected[i]);
            System.out.println("  Consistent: " + (consistent ? "YES" : "NO"));
            System.out.println("  Status:     " + (pass ? "✅ PASSED" : "❌ FAILED"));
            System.out.println();
        }

        // Quick performance smoke test (optional moderate size)
        int n = 10000;
        int[][] large = new int[n][2];
        Random rand = new Random(1);
        for (int i = 0; i < n; i++) {
            int a = rand.nextInt(200000) - 100000;
            int b = a + rand.nextInt(100) + 1; // ensure a < b
            large[i][0] = a; large[i][1] = b;
        }
        int res = solution.eraseOverlapIntervals(copy(large));
        System.out.println("Large test (" + n + " intervals) result: " + res + " (just ensuring it runs fast)");
    }
}

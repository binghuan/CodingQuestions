package com.bh;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;

// Coding questions in Google interviews.

public class mergeInsertRangesToQuery {

    public static class RangeContainer {
        private final List<Range> ranges = new ArrayList<>();

        public void insertRange(int start, int end) {
            Range newRange = new Range(start, end);
            List<Range> toMerge = new ArrayList<>();
            for (Range range : ranges) {
                if (range.start <= newRange.end && range.end >= newRange.start) {
                    toMerge.add(range);
                }
            }
            ranges.removeAll(toMerge);
            for (Range range : toMerge) {
                newRange.start = Math.min(newRange.start, range.start);
                newRange.end = Math.max(newRange.end, range.end);
            }
            ranges.add(newRange);
            ranges.sort(Comparator.comparingInt(r -> r.start));
        }

        public boolean queryPoint(int point) {

            // User binary search , time complexity is O(log n)
            int left = 0;
            int right = ranges.size() - 1;

            while (left <= right) {
                int mid = left + (right - left) / 2;
                Range range = ranges.get(mid);

                if (point < range.start) {
                    right = mid - 1;
                } else if (point > range.end) {
                    left = mid + 1;
                } else {
                    return true; // point is within the range
                }
            }

            return false;
        }

        private static class Range {
            int start;
            int end;

            Range(int start, int end) {
                this.start = start;
                this.end = end;
            }
        }

        public void printRanges() {
            for (Range range : ranges) {
                System.out.println(range.start + "-" + range.end);
            }
        }
    }


    public static void main(String[] args) {
        RangeContainer container = new RangeContainer();
        container.insertRange(2, 5);
        container.insertRange(9, 15);
        container.insertRange(2, 13);

        container.printRanges();
        System.out.println("0 -> " + container.queryPoint(0)); // false
        System.out.println("2 -> " + container.queryPoint(2)); // true
        System.out.println("10 -> " + container.queryPoint(10)); // true
    }
}

/*
    Write a Java program to handle the insertion of ranges and point queries.
    Ranges may overlap, and after inserting a range, you should be able to perform point queries.

    Functionality:
    Insert Range: Insert a range such as 2-5 or 9-13. If ranges overlap, they should be merged.
    Query Point: Query a specific point to determine if it lies within any of the ranges.

    Example:
    Insert ranges 2-5, 9-15, 2-13
    Query point 0 -> returns false
    Query point 2 -> returns true
    Query point 10 -> returns true


    Related LeetCode problems:
    #56: https://leetcode.com/problems/merge-intervals/
    #57: https://leetcode.com/problems/insert-interval/
 */

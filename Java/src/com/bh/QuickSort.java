package com.bh;

import java.util.Arrays;

/**
 * In-place QuickSort implementation.
 * - Average time: O(n log n); worst-case: O(n^2)
 * - Space: O(log n) recursion stack
 * - Unstable sort
 */
public class QuickSort {
    static class Solution {
        /**
         * Swap two elements in the array at indices left and right.
         */
        private void swap(int[] array, int left, int right) {
            if (left == right) {
                return;
            }
            int temp = array[left];
            array[left] = array[right];
            array[right] = temp;
        }

        /**
         * Partition around a pivot value (not pivot index).
         * Moves values < pivot to the left and > pivot to the right.
         * Returns the first index of the right partition.
         */
        private int partition(int[] array, int left, int right, int pivot) {
            while (left <= right) {
                // Move left pointer until element >= pivot
                while (array[left] < pivot) {
                    left++;
                }
                // Move right pointer until element <= pivot
                while (array[right] > pivot) {
                    right--;
                }
                // Place out-of-order elements correctly, then move both pointers
                if (left <= right) {
                    swap(array, left, right);
                    left++;
                    right--;
                }
            }
            return left;
        }

        /**
         * Recursive QuickSort on inclusive range [left, right].
         */
        private void quickSort(int[] array, int left, int right) {
            if (left >= right) {
                return;
            }
            // Choose middle element as pivot value to mitigate worst case on sorted data
            int pivotIndex = (left + right) / 2;
            int pivot = array[pivotIndex];
            int index = partition(array, left, right, pivot);
            quickSort(array, left, index - 1);
            quickSort(array, index, right);
        }

        /**
         * Public entry to sort the array in ascending order.
         */
        public void sortArray(int[] nums) {
            if (nums == null || nums.length <= 1) {
                return;
            }
            quickSort(nums, 0, nums.length - 1);
        }
    }

    public static void main(String[] args) {
        int[] numbs = {5, 2, 3, 1};
        QuickSort.Solution solution = new QuickSort.Solution();
        System.out.println("INPUT:" + Arrays.toString(numbs));
        solution.sortArray(numbs);
        System.out.println("OUTPUT:" + Arrays.toString(numbs));
    }
}

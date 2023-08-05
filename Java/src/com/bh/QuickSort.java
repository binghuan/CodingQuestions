package com.bh;

import java.util.Arrays;

public class QuickSort {

    static
    class Solution {

        private void swap(int[] array, int left, int right) {

            if (left == right) {
                return;
            }

            int temp = array[left];
            array[left] = array[right];
            array[right] = temp;
        }

        private int partition(int[] array, int left, int right, int pivot) {

            while (left <= right) {

                while (array[left] < pivot) {
                    left++;
                }

                while (array[right] > pivot) {
                    right--;
                }

                if (left <= right) {
                    swap(array, left, right);
                    left++;
                    right--;
                }
            }

            return left;
        }

        private void quickSort(int[] array, int left, int right) {

            if (left >= right) {
                return;
            }

            int pivotIndex = (left + right) / 2;
            int pivot = array[pivotIndex];

            int index = partition(array, left, right, pivot);

            quickSort(array, left, index - 1);
            quickSort(array, index, right);

        }

        public void sortArray(int[] nums) {

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

package com.bh;

import java.util.Arrays;

/**
 * LeetCode 912: Sort an Array
 * 
 * Problem Description:
 * Given an array of integers nums, sort the array in ascending order and return it.
 * You must solve the problem without using any built-in functions in O(nlog(n)) time 
 * complexity and with the smallest space complexity possible.
 * 
 * Example:
 * Input: nums = [5,2,3,1]
 * Output: [1,2,3,5]
 * 
 * Solution Approach - Quick Sort:
 * Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element
 * and partitioning the array around this pivot such that:
 * - Elements smaller than pivot are on the left
 * - Elements greater than pivot are on the right
 * - Recursively sort both partitions
 * 
 * Algorithm Steps:
 * 1. Choose a pivot element (here we use middle element)
 * 2. Partition array around pivot using two pointers
 * 3. Recursively sort left and right partitions
 * 
 * Time Complexity: 
 * - Average case: O(n log n)
 * - Worst case: O(n²) - when pivot is always min/max
 * Space Complexity: O(log n) - recursion stack depth
 */
public class no0912_Sort_an_Array {

    static
    class Solution {

        /**
         * Helper method to swap two elements in the array
         * 
         * @param array The array to perform swap on
         * @param left Index of first element
         * @param right Index of second element
         */
        private void swap(int[] array, int left, int right) {
            // Optimization: no need to swap if indices are the same
            if (left == right) {
                return;
            }

            // Standard three-step swap using temporary variable
            int temp = array[left];
            array[left] = array[right];
            array[right] = temp;
        }

        /**
         * Partition the array around a pivot value using Lomuto partition scheme
         * 
         * This method rearranges the array such that:
         * - All elements < pivot are moved to the left side
         * - All elements > pivot are moved to the right side
         * - Elements equal to pivot can be on either side
         * 
         * @param array The array to partition
         * @param left Starting index of the partition range
         * @param right Ending index of the partition range
         * @param pivot The pivot value to partition around
         * @return The final position where left pointer stops (partition point)
         */
        private int partition(int[] array, int left, int right, int pivot) {
            // Two-pointer approach: left moves right, right moves left
            while (left <= right) {

                // Move left pointer right until we find element >= pivot
                while (array[left] < pivot) {
                    left++;
                }

                // Move right pointer left until we find element <= pivot
                while (array[right] > pivot) {
                    right--;
                }

                // If pointers haven't crossed, swap elements and move both pointers
                if (left <= right) {
                    swap(array, left, right);
                    left++;   // Move past the swapped element
                    right--;  // Move past the swapped element
                }
            }

            // Return the partition point (where left pointer ended up)
            // Elements to the left of this point are <= pivot
            // Elements to the right of this point are >= pivot
            return left;
        }

        /**
         * Recursive Quick Sort implementation
         * 
         * Algorithm:
         * 1. Base case: if left >= right, subarray has 0 or 1 element (already sorted)
         * 2. Choose pivot (middle element)
         * 3. Partition array around pivot
         * 4. Recursively sort left partition [left, index-1]
         * 5. Recursively sort right partition [index, right]
         * 
         * @param array The array to sort
         * @param left Starting index of the range to sort
         * @param right Ending index of the range to sort
         */
        private void quickSort(int[] array, int left, int right) {
            // Base case: single element or empty subarray is already sorted
            if (left >= right) {
                return;
            }

            // Choose pivot as middle element to avoid worst-case on sorted arrays
            int pivotIndex = (left + right) / 2;
            int pivot = array[pivotIndex];

            // Partition array around pivot and get the partition point
            int index = partition(array, left, right, pivot);

            // Recursively sort the left partition (elements < pivot)
            // Note: index-1 because elements at index and beyond are >= pivot
            quickSort(array, left, index - 1);
            
            // Recursively sort the right partition (elements >= pivot)
            quickSort(array, index, right);
        }

        /**
         * Main method to sort the array using Quick Sort algorithm
         * 
         * @param nums Input array to be sorted
         * @return The sorted array (modified in-place)
         */
        public int[] sortArray(int[] nums) {
            // Handle edge cases
            if (nums == null || nums.length <= 1) {
                return nums;
            }
            
            // Perform quick sort on the entire array
            quickSort(nums, 0, nums.length - 1);
            
            return nums;
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test Case 1: Basic example from problem description
        System.out.println("=== Test Case 1: Basic Example ===");
        int[] nums1 = {5, 2, 3, 1};
        System.out.println("INPUT:  " + Arrays.toString(nums1));
        int[] result1 = solution.sortArray(nums1.clone()); // Use clone to preserve original
        System.out.println("OUTPUT: " + Arrays.toString(result1));
        System.out.println("Expected: [1, 2, 3, 5]");
        System.out.println();

        // Test Case 2: Array with duplicates
        System.out.println("=== Test Case 2: Array with Duplicates ===");
        int[] nums2 = {5, 1, 1, 2, 0, 0};
        System.out.println("INPUT:  " + Arrays.toString(nums2));
        int[] result2 = solution.sortArray(nums2.clone());
        System.out.println("OUTPUT: " + Arrays.toString(result2));
        System.out.println("Expected: [0, 0, 1, 1, 2, 5]");
        System.out.println();

        // Test Case 3: Already sorted array
        System.out.println("=== Test Case 3: Already Sorted ===");
        int[] nums3 = {1, 2, 3, 4, 5};
        System.out.println("INPUT:  " + Arrays.toString(nums3));
        int[] result3 = solution.sortArray(nums3.clone());
        System.out.println("OUTPUT: " + Arrays.toString(result3));
        System.out.println("Expected: [1, 2, 3, 4, 5]");
        System.out.println();

        // Test Case 4: Reverse sorted array
        System.out.println("=== Test Case 4: Reverse Sorted ===");
        int[] nums4 = {5, 4, 3, 2, 1};
        System.out.println("INPUT:  " + Arrays.toString(nums4));
        int[] result4 = solution.sortArray(nums4.clone());
        System.out.println("OUTPUT: " + Arrays.toString(result4));
        System.out.println("Expected: [1, 2, 3, 4, 5]");
        System.out.println();

        // Test Case 5: Single element
        System.out.println("=== Test Case 5: Single Element ===");
        int[] nums5 = {42};
        System.out.println("INPUT:  " + Arrays.toString(nums5));
        int[] result5 = solution.sortArray(nums5.clone());
        System.out.println("OUTPUT: " + Arrays.toString(result5));
        System.out.println("Expected: [42]");
        System.out.println();

        // Test Case 6: Array with negative numbers
        System.out.println("=== Test Case 6: With Negative Numbers ===");
        int[] nums6 = {-1, 2, -8, -10, 0, 3};
        System.out.println("INPUT:  " + Arrays.toString(nums6));
        int[] result6 = solution.sortArray(nums6.clone());
        System.out.println("OUTPUT: " + Arrays.toString(result6));
        System.out.println("Expected: [-10, -8, -1, 0, 2, 3]");
        System.out.println();

        // Verification using built-in sort for comparison
        System.out.println("=== Verification using Arrays.sort() ===");
        int[] original = {5, 2, 3, 1, 9, 8, 7, 6};
        int[] ourResult = solution.sortArray(original.clone());
        int[] expectedResult = original.clone();
        Arrays.sort(expectedResult);
        
        System.out.println("Our Quick Sort:   " + Arrays.toString(ourResult));
        System.out.println("Arrays.sort():    " + Arrays.toString(expectedResult));
        System.out.println("Match: " + Arrays.equals(ourResult, expectedResult));
    }

}

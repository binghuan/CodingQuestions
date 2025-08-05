
package com.bh;

import java.util.*;

/**
 * LeetCode 215: Kth Largest Element in an Array
 * 
 * Problem Description:
 * Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 * 
 * Example:
 * Input: nums = [3,2,1,5,6,4], k = 2
 * Output: 5
 * Explanation: The sorted array is [6,5,4,3,2,1], the 2nd largest element is 5.
 * 
 * Constraints:
 * - 1 <= k <= nums.length <= 10^5
 * - -10^4 <= nums[i] <= 10^4
 */
public class no0215_Kth_Largest_Element_in_Array {

    /**
     * Solution 1: Min Heap Approach
     * 
     * Algorithm:
     * 1. Use a min heap of size k
     * 2. Add elements to heap, if size > k, remove the smallest
     * 3. The root of heap will be the kth largest element
     * 
     * Key Insight:
     * By maintaining a min heap of size k, the smallest element in the heap
     * will be the kth largest element in the entire array.
     * 
     * Time Complexity: O(n log k)
     * Space Complexity: O(k)
     */
    public int findKthLargest(int[] nums, int k) {
        // Create a min heap of size k
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            minHeap.offer(num);
            
            // If heap size exceeds k, remove the smallest element
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        // The root of min heap is the kth largest element
        return minHeap.peek();
    }
    
    /**
     * Solution 2: Quick Select Algorithm (Optimal)
     * 
     * Algorithm:
     * 1. Use partition logic from QuickSort
     * 2. Partition array around a pivot
     * 3. If pivot position == k-1, we found the answer
     * 4. Otherwise, recursively search in left or right part
     * 
     * Key Insight:
     * Instead of fully sorting the array, we only need to find the element
     * at the (n-k)th position in a sorted array (0-indexed).
     * 
     * Time Complexity: O(n) average, O(n²) worst case
     * Space Complexity: O(1) if implemented iteratively
     */
    public int findKthLargestQuickSelect(int[] nums, int k) {
        // Convert to 0-indexed: kth largest = (n-k)th smallest in 0-indexed
        int targetIndex = nums.length - k;
        return quickSelect(nums, 0, nums.length - 1, targetIndex);
    }
    
    /**
     * Quick Select helper method
     */
    private int quickSelect(int[] nums, int left, int right, int targetIndex) {
        if (left == right) {
            return nums[left];
        }
        
        // Choose random pivot to avoid worst case
        Random random = new Random();
        int pivotIndex = left + random.nextInt(right - left + 1);
        
        // Partition and get final position of pivot
        pivotIndex = partition(nums, left, right, pivotIndex);
        
        if (pivotIndex == targetIndex) {
            // Found the target
            return nums[pivotIndex];
        } else if (pivotIndex < targetIndex) {
            // Target is in right part
            return quickSelect(nums, pivotIndex + 1, right, targetIndex);
        } else {
            // Target is in left part
            return quickSelect(nums, left, pivotIndex - 1, targetIndex);
        }
    }
    
    /**
     * Partition method for Quick Select
     */
    private int partition(int[] nums, int left, int right, int pivotIndex) {
        int pivotValue = nums[pivotIndex];
        
        // Move pivot to end
        swap(nums, pivotIndex, right);
        
        int storeIndex = left;
        
        // Move all smaller elements to left
        for (int i = left; i < right; i++) {
            if (nums[i] < pivotValue) {
                swap(nums, i, storeIndex);
                storeIndex++;
            }
        }
        
        // Move pivot to its final position
        swap(nums, storeIndex, right);
        
        return storeIndex;
    }
    
    /**
     * Helper method to swap elements
     */
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    /**
     * Solution 3: Max Heap Approach
     * 
     * Algorithm:
     * 1. Build a max heap from all elements
     * 2. Extract max k times
     * 3. The kth extracted element is the answer
     * 
     * Time Complexity: O(n + k log n)
     * Space Complexity: O(n)
     */
    public int findKthLargestMaxHeap(int[] nums, int k) {
        // Create max heap (reverse order comparator)
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        
        // Add all elements to heap
        for (int num : nums) {
            maxHeap.offer(num);
        }
        
        // Extract max k times
        int result = 0;
        for (int i = 0; i < k; i++) {
            result = maxHeap.poll();
        }
        
        return result;
    }
    
    /**
     * Solution 4: Counting Sort Approach (for limited range)
     * 
     * This works well when the range of numbers is small
     * Suitable for problems with constraints like -10^4 <= nums[i] <= 10^4
     * 
     * Algorithm:
     * 1. Count frequency of each number
     * 2. Traverse from largest to smallest
     * 3. Subtract frequencies until we reach the kth element
     * 
     * Time Complexity: O(n + range)
     * Space Complexity: O(range)
     */
    public int findKthLargestCountingSort(int[] nums, int k) {
        // Find min and max to determine range
        int min = Arrays.stream(nums).min().orElse(0);
        int max = Arrays.stream(nums).max().orElse(0);
        
        // Create count array
        int[] count = new int[max - min + 1];
        
        // Count frequencies
        for (int num : nums) {
            count[num - min]++;
        }
        
        // Find kth largest by traversing from largest to smallest
        int remaining = k;
        for (int i = count.length - 1; i >= 0; i--) {
            remaining -= count[i];
            if (remaining <= 0) {
                return i + min;
            }
        }
        
        return -1; // Should never reach here
    }
    
    public static void main(String[] args) {
        no0215_Kth_Largest_Element_in_Array solution = new no0215_Kth_Largest_Element_in_Array();
        
        // Test Case 1: nums = [3,2,1,5,6,4], k = 2
        // Expected: 5 (sorted: [6,5,4,3,2,1], 2nd largest is 5)
        int[] nums1 = {3, 2, 1, 5, 6, 4};
        int k1 = 2;
        
        System.out.println("=== Test Case 1 ===");
        System.out.println("Input: nums = " + Arrays.toString(nums1) + ", k = " + k1);
        System.out.println("Sorted for reference: [6,5,4,3,2,1]");
        
        int result1_heap = solution.findKthLargest(nums1, k1);
        System.out.println("Result (Min Heap): " + result1_heap);
        
        int result1_quickselect = solution.findKthLargestQuickSelect(nums1.clone(), k1);
        System.out.println("Result (Quick Select): " + result1_quickselect);
        
        int result1_maxheap = solution.findKthLargestMaxHeap(nums1, k1);
        System.out.println("Result (Max Heap): " + result1_maxheap);
        
        int result1_counting = solution.findKthLargestCountingSort(nums1, k1);
        System.out.println("Result (Counting Sort): " + result1_counting);
        
        System.out.println("Expected: 5");
        System.out.println("All methods correct: " + 
            (result1_heap == 5 && result1_quickselect == 5 && 
             result1_maxheap == 5 && result1_counting == 5));
        
        // Test Case 2: nums = [3,2,3,1,2,4,5,5,6], k = 4
        // Expected: 4 (sorted: [6,5,5,4,3,3,2,2,1], 4th largest is 4)
        int[] nums2 = {3, 2, 3, 1, 2, 4, 5, 5, 6};
        int k2 = 4;
        
        System.out.println("\n=== Test Case 2 ===");
        System.out.println("Input: nums = " + Arrays.toString(nums2) + ", k = " + k2);
        System.out.println("Sorted for reference: [6,5,5,4,3,3,2,2,1]");
        
        int result2_heap = solution.findKthLargest(nums2, k2);
        System.out.println("Result (Min Heap): " + result2_heap);
        
        int result2_quickselect = solution.findKthLargestQuickSelect(nums2.clone(), k2);
        System.out.println("Result (Quick Select): " + result2_quickselect);
        
        int result2_maxheap = solution.findKthLargestMaxHeap(nums2, k2);
        System.out.println("Result (Max Heap): " + result2_maxheap);
        
        int result2_counting = solution.findKthLargestCountingSort(nums2, k2);
        System.out.println("Result (Counting Sort): " + result2_counting);
        
        System.out.println("Expected: 4");
        System.out.println("All methods correct: " + 
            (result2_heap == 4 && result2_quickselect == 4 && 
             result2_maxheap == 4 && result2_counting == 4));
        
        // Test Case 3: Edge case - single element
        int[] nums3 = {1};
        int k3 = 1;
        
        System.out.println("\n=== Test Case 3 (Edge Case) ===");
        System.out.println("Input: nums = " + Arrays.toString(nums3) + ", k = " + k3);
        
        int result3 = solution.findKthLargest(nums3, k3);
        System.out.println("Result: " + result3);
        System.out.println("Expected: 1");
        System.out.println("Correct: " + (result3 == 1));
        
        System.out.println("\n=== Algorithm Comparison ===");
        System.out.println("1. Min Heap: O(n log k) time, O(k) space - Good when k is small");
        System.out.println("2. Quick Select: O(n) average time, O(1) space - OPTIMAL general solution");
        System.out.println("3. Max Heap: O(n + k log n) time, O(n) space - Good when k is large");
        System.out.println("4. Counting Sort: O(n + range) time, O(range) space - Good for limited range");
        System.out.println("\nQuick Select is generally the best approach for this problem!");
    }
}



package com.bh;

import java.util.*;

/**
 * LeetCode 215: Kth Largest Element in an Array
 * 
 * Problem: Given an integer array nums and an integer k, return the kth largest element in the array.
 * Note that it is the kth largest element in the sorted order, not the kth distinct element.
 * Can you solve it without sorting?
 * 
 * 題目：給定一個整數數組 nums 和一個整數 k，返回數組中第 k 大的元素。
 * 注意這是排序順序中的第 k 大元素，不是第 k 個不同的元素。
 * 你能在不排序的情況下解決它嗎？
 */
public class no0215_Kth_Largest_Element_in_Array {

    /**
     * Solution 1: Min Heap Approach
     * 解法1：最小堆方法
     * 
     * Algorithm:
     * 1. Use a min heap of size k
     * 2. Add elements to heap, if size > k, remove the smallest
     * 3. The root of heap will be the kth largest element
     * 
     * 算法步驟：
     * 1. 使用大小為 k 的最小堆
     * 2. 將元素添加到堆中，如果大小 > k，移除最小的元素
     * 3. 堆的根將是第 k 大的元素
     * 
     * Time Complexity: O(n log k)
     * Space Complexity: O(k)
     * 
     * 時間複雜度：O(n log k)
     * 空間複雜度：O(k)
     */
    public int findKthLargest(int[] nums, int k) {
        // Create a min heap of size k
        // 創建大小為 k 的最小堆
        PriorityQueue<Integer> minHeap = new PriorityQueue<>();
        
        for (int num : nums) {
            minHeap.offer(num);
            
            // If heap size exceeds k, remove the smallest element
            // 如果堆大小超過 k，移除最小元素
            if (minHeap.size() > k) {
                minHeap.poll();
            }
        }
        
        // The root of min heap is the kth largest element
        // 最小堆的根是第 k 大的元素
        return minHeap.peek();
    }
    
    /**
     * Solution 2: Quick Select Algorithm (Optimal)
     * 解法2：快速選擇算法（最優）
     * 
     * Algorithm:
     * 1. Use partition logic from QuickSort
     * 2. Partition array around a pivot
     * 3. If pivot position == k-1, we found the answer
     * 4. Otherwise, recursively search in left or right part
     * 
     * 算法步驟：
     * 1. 使用 QuickSort 的分區邏輯
     * 2. 圍繞 pivot 分區數組
     * 3. 如果 pivot 位置 == k-1，我們找到了答案
     * 4. 否則，在左邊或右邊部分遞歸搜索
     * 
     * Time Complexity: O(n) average, O(n²) worst case
     * Space Complexity: O(1) if implemented iteratively
     * 
     * 時間複雜度：平均 O(n)，最壞情況 O(n²)
     * 空間複雜度：如果迭代實現則為 O(1)
     */
    public int findKthLargestQuickSelect(int[] nums, int k) {
        // Convert to 0-indexed: kth largest = (n-k)th smallest in 0-indexed
        // 轉換為 0 索引：第 k 大 = 0 索引中第 (n-k) 小
        int targetIndex = nums.length - k;
        return quickSelect(nums, 0, nums.length - 1, targetIndex);
    }
    
    /**
     * Quick Select helper method
     * 快速選擇輔助方法
     */
    private int quickSelect(int[] nums, int left, int right, int targetIndex) {
        if (left == right) {
            return nums[left];
        }
        
        // Choose random pivot to avoid worst case
        // 選擇隨機 pivot 以避免最壞情況
        Random random = new Random();
        int pivotIndex = left + random.nextInt(right - left + 1);
        
        // Partition and get final position of pivot
        // 分區並獲取 pivot 的最終位置
        pivotIndex = partition(nums, left, right, pivotIndex);
        
        if (pivotIndex == targetIndex) {
            // Found the target
            // 找到目標
            return nums[pivotIndex];
        } else if (pivotIndex < targetIndex) {
            // Target is in right part
            // 目標在右邊部分
            return quickSelect(nums, pivotIndex + 1, right, targetIndex);
        } else {
            // Target is in left part
            // 目標在左邊部分
            return quickSelect(nums, left, pivotIndex - 1, targetIndex);
        }
    }
    
    /**
     * Partition method for Quick Select
     * 快速選擇的分區方法
     */
    private int partition(int[] nums, int left, int right, int pivotIndex) {
        int pivotValue = nums[pivotIndex];
        
        // Move pivot to end
        // 將 pivot 移到末尾
        swap(nums, pivotIndex, right);
        
        int storeIndex = left;
        
        // Move all smaller elements to left
        // 將所有較小的元素移到左邊
        for (int i = left; i < right; i++) {
            if (nums[i] < pivotValue) {
                swap(nums, i, storeIndex);
                storeIndex++;
            }
        }
        
        // Move pivot to its final position
        // 將 pivot 移到其最終位置
        swap(nums, storeIndex, right);
        
        return storeIndex;
    }
    
    /**
     * Helper method to swap elements
     * 交換元素的輔助方法
     */
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    /**
     * Solution 3: Max Heap Approach
     * 解法3：最大堆方法
     * 
     * Algorithm:
     * 1. Build a max heap from all elements
     * 2. Extract max k times
     * 3. The kth extracted element is the answer
     * 
     * 算法步驟：
     * 1. 從所有元素構建最大堆
     * 2. 提取最大值 k 次
     * 3. 第 k 次提取的元素就是答案
     * 
     * Time Complexity: O(n + k log n)
     * Space Complexity: O(n)
     * 
     * 時間複雜度：O(n + k log n)
     * 空間複雜度：O(n)
     */
    public int findKthLargestMaxHeap(int[] nums, int k) {
        // Create max heap
        // 創建最大堆
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);
        
        // Add all elements to heap
        // 將所有元素添加到堆中
        for (int num : nums) {
            maxHeap.offer(num);
        }
        
        // Extract max k times
        // 提取最大值 k 次
        int result = 0;
        for (int i = 0; i < k; i++) {
            result = maxHeap.poll();
        }
        
        return result;
    }
    
    /**
     * Solution 4: Counting Sort Approach (for limited range)
     * 解法4：計數排序方法（適用於有限範圍）
     * 
     * This works well when the range of numbers is small
     * 當數字範圍較小時效果很好
     * 
     * Time Complexity: O(n + range)
     * Space Complexity: O(range)
     * 
     * 時間複雜度：O(n + range)
     * 空間複雜度：O(range)
     */
    public int findKthLargestCountingSort(int[] nums, int k) {
        // Find min and max to determine range
        // 找到最小值和最大值以確定範圍
        int min = Arrays.stream(nums).min().orElse(0);
        int max = Arrays.stream(nums).max().orElse(0);
        
        // Create count array
        // 創建計數數組
        int[] count = new int[max - min + 1];
        
        // Count frequencies
        // 統計頻率
        for (int num : nums) {
            count[num - min]++;
        }
        
        // Find kth largest by traversing from largest to smallest
        // 通過從大到小遍歷找到第 k 大
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



package com.bh;

import java.util.*;

/**
 * LeetCode 347: Top K Frequent Elements
 * 
 * Problem: Given an integer array nums and an integer k, return the k most frequent elements.
 * You may return the answer in any order.
 * 
 * Follow up: Your algorithm's time complexity must be better than O(n log n).
 */
public class no0347_Top_K_Frequent_Elements {

    /**
     * Solution 1: Min Heap (Priority Queue) Approach
     * 
     * Algorithm:
     * 1. Count frequency of each element using HashMap
     * 2. Use a min heap of size k to keep track of top k frequent elements
     * 3. For each unique element, add to heap if size < k, or replace min if current frequency > min frequency
     * 
     * Time Complexity: O(n log k) where n is array length
     * Space Complexity: O(n + k) for HashMap and heap
     */
    public int[] topKFrequent(int[] nums, int k) {
        // Step 1: Count frequency of each element
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Use min heap to keep top k frequent elements
        // Min heap based on frequency (smallest frequency at top)
        PriorityQueue<Integer> minHeap = new PriorityQueue<>(
            (a, b) -> frequencyMap.get(a) - frequencyMap.get(b)
        );
        
        // Step 3: Process each unique element
        for (int num : frequencyMap.keySet()) {
            if (minHeap.size() < k) {
                // If heap size < k, add current element
                minHeap.offer(num);
            } else if (frequencyMap.get(num) > frequencyMap.get(minHeap.peek())) {
                // If current frequency > min frequency in heap, replace
                minHeap.poll();
                minHeap.offer(num);
            }
        }
        
        // Step 4: Convert heap to result array
        int[] result = new int[k];
        for (int i = k - 1; i >= 0; i--) {
            result[i] = minHeap.poll();
        }
        
        return result;
    }
    
    /**
     * Solution 2: Bucket Sort Approach (Optimal)
     * 
     * Algorithm:
     * 1. Count frequency of each element
     * 2. Create buckets where index represents frequency
     * 3. Place elements in corresponding frequency buckets
     * 4. Traverse from highest frequency to get top k elements
     * 
     * Time Complexity: O(n) - Linear time!
     * Space Complexity: O(n)
     */
    public int[] topKFrequentBucketSort(int[] nums, int k) {
        // Step 1: Count frequency
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Create frequency buckets
        // Index represents frequency, value is list of numbers with that frequency
        List<Integer>[] buckets = new List[nums.length + 1];
        for (int i = 0; i <= nums.length; i++) {
            buckets[i] = new ArrayList<>();
        }
        
        // Step 3: Fill buckets
        for (Map.Entry<Integer, Integer> entry : frequencyMap.entrySet()) {
            int num = entry.getKey();
            int frequency = entry.getValue();
            buckets[frequency].add(num);
        }
        
        // Step 4: Collect top k from highest frequency buckets
        List<Integer> result = new ArrayList<>();
        for (int i = buckets.length - 1; i >= 0 && result.size() < k; i--) {
            if (!buckets[i].isEmpty()) {
                result.addAll(buckets[i]);
            }
        }
        
        // Convert to array and trim to size k
        return result.stream().limit(k).mapToInt(i -> i).toArray();
    }
    
    /**
     * Solution 3: Quick Select Approach
     * 
     * Uses the idea of QuickSort's partition to find kth most frequent elements
     * 
     * Time Complexity: O(n) average, O(n²) worst case
     * Space Complexity: O(n)
     */
    public int[] topKFrequentQuickSelect(int[] nums, int k) {
        // Step 1: Count frequency
        Map<Integer, Integer> frequencyMap = new HashMap<>();
        for (int num : nums) {
            frequencyMap.put(num, frequencyMap.getOrDefault(num, 0) + 1);
        }
        
        // Step 2: Convert to array of unique numbers
        int[] unique = frequencyMap.keySet().stream().mapToInt(i -> i).toArray();
        
        // Step 3: Use quick select to find top k
        quickSelect(unique, 0, unique.length - 1, unique.length - k, frequencyMap);
        
        // Step 4: Return last k elements (most frequent)
        return Arrays.copyOfRange(unique, unique.length - k, unique.length);
    }
    
    /**
     * Helper method for quick select
     */
    private void quickSelect(int[] nums, int left, int right, int k, Map<Integer, Integer> frequencyMap) {
        if (left >= right) return;
        
        int pivotIndex = partition(nums, left, right, frequencyMap);
        
        if (pivotIndex == k) {
            return; // Found the kth element
        } else if (pivotIndex < k) {
            quickSelect(nums, pivotIndex + 1, right, k, frequencyMap);
        } else {
            quickSelect(nums, left, pivotIndex - 1, k, frequencyMap);
        }
    }
    
    /**
     * Partition method for quick select
     */
    private int partition(int[] nums, int left, int right, Map<Integer, Integer> frequencyMap) {
        int pivot = frequencyMap.get(nums[right]);
        int i = left;
        
        for (int j = left; j < right; j++) {
            if (frequencyMap.get(nums[j]) < pivot) {
                swap(nums, i, j);
                i++;
            }
        }
        
        swap(nums, i, right);
        return i;
    }
    
    /**
     * Helper method to swap elements
     */
    private void swap(int[] nums, int i, int j) {
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    
    public static void main(String[] args) {
        no0347_Top_K_Frequent_Elements solution = new no0347_Top_K_Frequent_Elements();
        
        // Test Case 1: nums = [1,1,1,2,2,3], k = 2
        // Expected: [1,2] (any order)
        int[] nums1 = {1, 1, 1, 2, 2, 3};
        int k1 = 2;
        
        System.out.println("=== Test Case 1 ===");
        System.out.println("Input: nums = " + Arrays.toString(nums1) + ", k = " + k1);
        
        int[] result1_heap = solution.topKFrequent(nums1, k1);
        System.out.println("Result (Min Heap): " + Arrays.toString(result1_heap));
        
        int[] result1_bucket = solution.topKFrequentBucketSort(nums1, k1);
        System.out.println("Result (Bucket Sort): " + Arrays.toString(result1_bucket));
        
        int[] result1_quickselect = solution.topKFrequentQuickSelect(nums1, k1);
        System.out.println("Result (Quick Select): " + Arrays.toString(result1_quickselect));
        
        // Test Case 2: nums = [1], k = 1
        // Expected: [1]
        int[] nums2 = {1};
        int k2 = 1;
        
        System.out.println("\n=== Test Case 2 ===");
        System.out.println("Input: nums = " + Arrays.toString(nums2) + ", k = " + k2);
        
        int[] result2_heap = solution.topKFrequent(nums2, k2);
        System.out.println("Result (Min Heap): " + Arrays.toString(result2_heap));
        
        int[] result2_bucket = solution.topKFrequentBucketSort(nums2, k2);
        System.out.println("Result (Bucket Sort): " + Arrays.toString(result2_bucket));
        
        // Test Case 3: More complex case
        int[] nums3 = {4, 1, -1, 2, -1, 2, 3};
        int k3 = 2;
        
        System.out.println("\n=== Test Case 3 ===");
        System.out.println("Input: nums = " + Arrays.toString(nums3) + ", k = " + k3);
        
        int[] result3_heap = solution.topKFrequent(nums3, k3);
        System.out.println("Result (Min Heap): " + Arrays.toString(result3_heap));
        
        int[] result3_bucket = solution.topKFrequentBucketSort(nums3, k3);
        System.out.println("Result (Bucket Sort): " + Arrays.toString(result3_bucket));
        
        System.out.println("\n=== Algorithm Comparison ===");
        System.out.println("1. Min Heap: O(n log k) time, O(n + k) space");
        System.out.println("2. Bucket Sort: O(n) time, O(n) space - OPTIMAL for this problem!");
        System.out.println("3. Quick Select: O(n) average time, O(n²) worst case, O(n) space");
        System.out.println("\nBucket Sort is the best approach as it achieves O(n) time complexity!");
    }
}

package com.bh;

import java.util.*;

public class no0373_Find_K_Pairs_with_Smallest_Sums {

    /**
     * Find the k pairs [u, v] where u is from nums1 and v is from nums2,
     * such that the sum u + v is smallest among all possible pairs.
     * <p>
     * Algorithm: Use a min-heap to always get the pair with smallest sum.
     * Start with pairs formed by nums1[0] and all elements in nums2.
     * For each extracted pair [nums1[i], nums2[j]], add the next pair [nums1[i+1], nums2[j]] if exists.
     * <p>
     * Time Complexity: O(k * log(min(k, nums1.length)))
     * Space Complexity: O(min(k, nums1.length))
     */
    public List<List<Integer>> kSmallestPairs(int[] nums1, int[] nums2, int k) {
        List<List<Integer>> result = new ArrayList<>();
        if (nums1.length == 0 || nums2.length == 0 || k == 0) {
            return result;
        }

        // Min-heap to store [sum, i, j] where i is index in nums1, j is index in nums2
        PriorityQueue<int[]> minHeap = new PriorityQueue<>((a, b) -> Integer.compare(a[0], b[0]));

        // Initially add pairs with nums1[i] and nums2[0] for all i
        for (int i = 0; i < Math.min(nums1.length, k); i++) {
            minHeap.offer(new int[]{nums1[i] + nums2[0], i, 0});
        }

        // Extract k smallest pairs
        while (k > 0 && !minHeap.isEmpty()) {
            int[] current = minHeap.poll();
            int sum = current[0];
            int i = current[1];
            int j = current[2];

            // Add current pair to result
            result.add(Arrays.asList(nums1[i], nums2[j]));
            k--;

            // Add next pair with same nums1[i] but next nums2[j+1] if exists
            if (j + 1 < nums2.length) {
                minHeap.offer(new int[]{nums1[i] + nums2[j + 1], i, j + 1});
            }
        }

        return result;
    }

    public static void main(String[] args) {
        no0373_Find_K_Pairs_with_Smallest_Sums solution = new no0373_Find_K_Pairs_with_Smallest_Sums();

        // Test Case 1
        int[] nums1_1 = {1, 7, 11};
        int[] nums2_1 = {2, 4, 6};
        int k1 = 3;
        List<List<Integer>> result1 = solution.kSmallestPairs(nums1_1, nums2_1, k1);
        System.out.println("Test Case 1:");
        System.out.println("Input: nums1 = " + Arrays.toString(nums1_1) + ", nums2 = " + Arrays.toString(nums2_1) + ", k = " + k1);
        System.out.println("Output: " + result1);
        System.out.println("Expected: [[1,2],[1,4],[1,6]]");
        System.out.println();

        // Test Case 2
        int[] nums1_2 = {1, 1, 2};
        int[] nums2_2 = {1, 2, 3};
        int k2 = 2;
        List<List<Integer>> result2 = solution.kSmallestPairs(nums1_2, nums2_2, k2);
        System.out.println("Test Case 2:");
        System.out.println("Input: nums1 = " + Arrays.toString(nums1_2) + ", nums2 = " + Arrays.toString(nums2_2) + ", k = " + k2);
        System.out.println("Output: " + result2);
        System.out.println("Expected: [[1,1],[1,1]]");
        System.out.println();

        // Test Case 3
        int[] nums1_3 = {1, 2};
        int[] nums2_3 = {3};
        int k3 = 3;
        List<List<Integer>> result3 = solution.kSmallestPairs(nums1_3, nums2_3, k3);
        System.out.println("Test Case 3:");
        System.out.println("Input: nums1 = " + Arrays.toString(nums1_3) + ", nums2 = " + Arrays.toString(nums2_3) + ", k = " + k3);
        System.out.println("Output: " + result3);
        System.out.println("Expected: [[1,3],[2,3]]");
        System.out.println();

        // Test Case 4: Edge case with k larger than possible pairs
        int[] nums1_4 = {1, 2, 4, 5, 6};
        int[] nums2_4 = {3, 5, 7, 9};
        int k4 = 3;
        List<List<Integer>> result4 = solution.kSmallestPairs(nums1_4, nums2_4, k4);
        System.out.println("Test Case 4:");
        System.out.println("Input: nums1 = " + Arrays.toString(nums1_4) + ", nums2 = " + Arrays.toString(nums2_4) + ", k = " + k4);
        System.out.println("Output: " + result4);
        System.out.println("Expected: [[1,3],[2,3],[1,5]]");
        System.out.println();

        // Test Case 5: Empty arrays
        int[] nums1_5 = {};
        int[] nums2_5 = {1, 2};
        int k5 = 1;
        List<List<Integer>> result5 = solution.kSmallestPairs(nums1_5, nums2_5, k5);
        System.out.println("Test Case 5 (Edge case - empty array):");
        System.out.println("Input: nums1 = " + Arrays.toString(nums1_5) + ", nums2 = " + Arrays.toString(nums2_5) + ", k = " + k5);
        System.out.println("Output: " + result5);
        System.out.println("Expected: []");
    }
}

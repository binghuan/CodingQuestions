package com.bh;

import java.util.*;

/**
 * LeetCode 15: 3Sum
 * 
 * 題目描述 / Problem Description:
 * 給定一個包含 n 個整數的數組 nums，判斷 nums 中是否存在三個元素 a，b，c，
 * 使得 a + b + c = 0 ？找出所有滿足條件且不重複的三元組。
 * 
 * Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
 * such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
 * Notice that the solution set must not contain duplicate triplets.
 * 
 * 解法思路 / Solution Approach:
 * 1. 排序 + 雙指針法 (Sort + Two Pointers) - O(n²)
 * 2. 哈希表法 (HashMap) - O(n²)
 * 3. 暴力法 (Brute Force) - O(n³)
 * 
 * 核心思想：
 * - 先排序數組，然後固定第一個數，用雙指針在剩餘數組中找兩數之和等於目標值
 * - 通過跳過重複元素來避免重複的三元組
 */
public class no0015_3Sum {

    public static void main(String[] args) {
        Solution solution = new Solution();
        Solution2 solution2 = new Solution2();
        Solution3 solution3 = new Solution3();

        // Example 1
        int[] nums1 = {-1,0,1,2,-1,-4};
        System.out.println("=== Example 1 ===");
        System.out.println("Input: nums = [-1,0,1,2,-1,-4]");
        
        List<List<Integer>> result1_1 = solution.threeSum(nums1.clone());
        System.out.println("Solution 1 (Two Pointers): " + result1_1);
        
        List<List<Integer>> result1_2 = solution2.threeSum(nums1.clone());
        System.out.println("Solution 2 (HashMap): " + result1_2);
        
        List<List<Integer>> result1_3 = solution3.threeSum(nums1.clone());
        System.out.println("Solution 3 (Brute Force): " + result1_3);
        
        System.out.println("Expected: [[-1,-1,2],[-1,0,1]]");
        System.out.println();

        // Example 2
        int[] nums2 = {0,1,1};
        System.out.println("=== Example 2 ===");
        System.out.println("Input: nums = [0,1,1]");
        
        List<List<Integer>> result2_1 = solution.threeSum(nums2.clone());
        System.out.println("Solution 1 (Two Pointers): " + result2_1);
        
        List<List<Integer>> result2_2 = solution2.threeSum(nums2.clone());
        System.out.println("Solution 2 (HashMap): " + result2_2);
        
        List<List<Integer>> result2_3 = solution3.threeSum(nums2.clone());
        System.out.println("Solution 3 (Brute Force): " + result2_3);
        
        System.out.println("Expected: []");
        System.out.println();

        // Example 3
        int[] nums3 = {0,0,0};
        System.out.println("=== Example 3 ===");
        System.out.println("Input: nums = [0,0,0]");
        
        List<List<Integer>> result3_1 = solution.threeSum(nums3.clone());
        System.out.println("Solution 1 (Two Pointers): " + result3_1);
        
        List<List<Integer>> result3_2 = solution2.threeSum(nums3.clone());
        System.out.println("Solution 2 (HashMap): " + result3_2);
        
        List<List<Integer>> result3_3 = solution3.threeSum(nums3.clone());
        System.out.println("Solution 3 (Brute Force): " + result3_3);
        
        System.out.println("Expected: [[0,0,0]]");
        System.out.println();

        // Additional test case
        int[] nums4 = {-2,0,1,1,2};
        System.out.println("=== Additional Test ===");
        System.out.println("Input: nums = [-2,0,1,1,2]");
        
        List<List<Integer>> result4_1 = solution.threeSum(nums4.clone());
        System.out.println("Solution 1 (Two Pointers): " + result4_1);
        
        System.out.println("Expected: [[-2,0,2],[-2,1,1]]");
        System.out.println();
    }

    // ========== 解法一：排序 + 雙指針法 (最優解) ==========
    /**
     * Solution 1: Sort + Two Pointers (Optimal)
     * 
     * 算法思路 / Algorithm:
     * 1. 首先對數組進行排序
     * 2. 遍歷數組，對於每個元素 nums[i]，在其後面的子數組中使用雙指針查找兩數之和等於 -nums[i]
     * 3. 跳過重複元素以避免重複的三元組
     * 
     * 時間複雜度 / Time Complexity: O(n²)
     * - 排序: O(n log n)
     * - 雙層循環: O(n²)
     * - 總體: O(n²)
     * 
     * 空間複雜度 / Space Complexity: O(1) 
     * - 除了輸出數組外，只使用常數額外空間
     */
    static class Solution {
        /**
         * Find all unique triplets in the array which gives the sum of zero.
         * 找出所有和為零的唯一三元組
         * 
         * @param nums 輸入整數數組 / input integer array
         * @return 所有和為零的三元組列表 / list of all triplets that sum to zero
         */
        public List<List<Integer>> threeSum(int[] nums) {
            List<List<Integer>> res = new ArrayList<>();
            
            // 邊界檢查 / Edge case check
            if (nums == null || nums.length < 3) {
                return res;
            }
            
            // 步驟1：排序數組 / Step 1: Sort the array
            Arrays.sort(nums);
            int n = nums.length;
            
            // 步驟2：遍歷每個可能的第一個元素 / Step 2: Iterate through each possible first element
            for (int i = 0; i < n - 2; i++) {
                // 跳過重複的第一個元素 / Skip duplicate first elements
                if (i > 0 && nums[i] == nums[i-1]) {
                    continue;
                }
                
                // 早期終止優化 / Early termination optimization
                // 如果最小的三個數之和都大於0，後面不可能有解
                if (nums[i] + nums[i+1] + nums[i+2] > 0) {
                    break;
                }
                
                // 如果當前數與最大的兩個數之和都小於0，當前數太小
                if (nums[i] + nums[n-2] + nums[n-1] < 0) {
                    continue;
                }
                
                // 步驟3：使用雙指針在剩餘數組中查找 / Step 3: Use two pointers in remaining array
                int left = i + 1;      // 左指針 / left pointer
                int right = n - 1;     // 右指針 / right pointer
                
                while (left < right) {
                    int sum = nums[i] + nums[left] + nums[right];
                    
                    if (sum == 0) {
                        // 找到一個解 / Found a solution
                        res.add(Arrays.asList(nums[i], nums[left], nums[right]));
                        
                        // 跳過重複的左指針元素 / Skip duplicate left elements
                        while (left < right && nums[left] == nums[left+1]) {
                            left++;
                        }
                        // 跳過重複的右指針元素 / Skip duplicate right elements
                        while (left < right && nums[right] == nums[right-1]) {
                            right--;
                        }
                        
                        // 移動雙指針 / Move both pointers
                        left++;
                        right--;
                    } else if (sum < 0) {
                        // 和太小，移動左指針增大和 / Sum too small, move left pointer
                        left++;
                    } else {
                        // 和太大，移動右指針減小和 / Sum too large, move right pointer
                        right--;
                    }
                }
            }
            
            return res;
        }
    }

    // ========== 解法二：哈希表法 ==========
    /**
     * Solution 2: HashMap Approach
     * 
     * 算法思路 / Algorithm:
     * 1. 對於每一對 (i, j)，在哈希表中查找是否存在 -(nums[i] + nums[j])
     * 2. 使用 Set 來避免重複的三元組
     * 
     * 時間複雜度 / Time Complexity: O(n²)
     * 空間複雜度 / Space Complexity: O(n)
     */
    static class Solution2 {
        public List<List<Integer>> threeSum(int[] nums) {
            if (nums == null || nums.length < 3) {
                return new ArrayList<>();
            }
            
            Set<List<Integer>> result = new HashSet<>();
            int n = nums.length;
            
            // 對每一對 (i, j) 進行處理
            for (int i = 0; i < n - 2; i++) {
                Set<Integer> seen = new HashSet<>();
                
                for (int j = i + 1; j < n; j++) {
                    int target = -(nums[i] + nums[j]);
                    
                    if (seen.contains(target)) {
                        // 找到一個三元組，需要排序後加入結果集
                        List<Integer> triplet = Arrays.asList(nums[i], nums[j], target);
                        Collections.sort(triplet);
                        result.add(triplet);
                    }
                    
                    seen.add(nums[j]);
                }
            }
            
            return new ArrayList<>(result);
        }
    }

    // ========== 解法三：暴力法 (用於理解) ==========
    /**
     * Solution 3: Brute Force (For Understanding)
     * 
     * 算法思路 / Algorithm:
     * 三重循環遍歷所有可能的三元組
     * 
     * 時間複雜度 / Time Complexity: O(n³)
     * 空間複雜度 / Space Complexity: O(1)
     */
    static class Solution3 {
        public List<List<Integer>> threeSum(int[] nums) {
            if (nums == null || nums.length < 3) {
                return new ArrayList<>();
            }
            
            Set<List<Integer>> result = new HashSet<>();
            int n = nums.length;
            
            // 三重循環檢查所有組合
            for (int i = 0; i < n - 2; i++) {
                for (int j = i + 1; j < n - 1; j++) {
                    for (int k = j + 1; k < n; k++) {
                        if (nums[i] + nums[j] + nums[k] == 0) {
                            List<Integer> triplet = Arrays.asList(nums[i], nums[j], nums[k]);
                            Collections.sort(triplet);
                            result.add(triplet);
                        }
                    }
                }
            }
            
            return new ArrayList<>(result);
        }
    }
}



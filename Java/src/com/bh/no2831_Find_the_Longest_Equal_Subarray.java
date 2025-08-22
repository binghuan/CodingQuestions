package com.bh;

import java.util.*;

/**
 * LeetCode 2831: Find the Longest Equal Subarray
 * <p>
 * Idea:
 * For each distinct value v, collect the indices where v occurs: pos[v] = [i1, i2, ...].
 * A window pos[l..r] corresponds to choosing r-l+1 occurrences of v. To make them a
 * contiguous equal subarray, we must delete the other elements between indices i_l and i_r.
 * Deletions needed = (i_r - i_l + 1) - (r - l + 1) = (i_r - i_l) - (r - l).
 * We maintain a sliding window while (i_r - i_l) - (r - l) <= k.
 * The window size is the length of the equal subarray achievable after ≤ k deletions.
 * <p>
 * Time: O(n), Space: O(n).
 */
public class no2831_Find_the_Longest_Equal_Subarray {

    static class Solution {
        public int longestEqualSubarray(List<Integer> nums, int k) {
            Map<Integer, List<Integer>> pos = new HashMap<>();
            for (int i = 0; i < nums.size(); i++) {
                int key = nums.get(i);
                List<Integer> list = pos.get(key);
                if (list == null) {
                    list = new ArrayList<>();
                    pos.put(key, list);
                }
                list.add(i);
            }

            int ans = 0;
            for (List<Integer> a : pos.values()) {
                int l = 0;
                for (int r = 0; r < a.size(); r++) {
                    // Shrink while deletions needed > k
                    while (a.get(r) - a.get(l) - (r - l) > k) {
                        l++;
                    }
                    ans = Math.max(ans, r - l + 1);
                }
            }
            return ans;
        }
    }

    // Simple test harness
    public static void main(String[] args) {
        Solution sol = new Solution();

        List<Integer> nums1 = Arrays.asList(1, 3, 2, 3, 1, 3);
        int k1 = 3;
        int res1 = sol.longestEqualSubarray(nums1, k1);
        System.out.println("Case 1 -> Expected 3, Got " + res1);

        List<Integer> nums2 = Arrays.asList(1, 1, 2, 2, 1, 1);
        int k2 = 2;
        int res2 = sol.longestEqualSubarray(nums2, k2);
        System.out.println("Case 2 -> Expected 4, Got " + res2);

        // Additional quick checks
        List<Integer> nums3 = Arrays.asList(5, 5, 5);
        System.out.println("All equal -> Expected 3, Got " + sol.longestEqualSubarray(nums3, 0));

        List<Integer> nums4 = Arrays.asList(1, 2, 3, 4);
        System.out.println("No deletions -> Expected 1, Got " + sol.longestEqualSubarray(nums4, 0));
    }
}

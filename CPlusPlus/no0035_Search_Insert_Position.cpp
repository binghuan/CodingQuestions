//
// Created by binghuan on 2025/9/6.
//

#include <iostream>
#include <vector>
#include <cassert>
using namespace std;

class Solution {
public:
    // Binary search approach - O(log n) time complexity
    int searchInsert(vector<int>& nums, int target) {
        int left = 0;
        int right = nums.size() - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;  // Avoid overflow

            if (nums[mid] == target) {
                return mid;  // Found target, return its index
            }

            if (nums[mid] < target) {
                left = mid + 1;  // Target is in right half
            } else {
                right = mid - 1; // Target is in left half
            }
        }

        // Target not found, left is the insertion position
        return left;
    }

    // Alternative: Linear search approach - O(n) time complexity
    int searchInsertLinear(vector<int>& nums, int target) {
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] >= target) {
                return i;
            }
        }
        // Target is larger than all elements
        return nums.size();
    }
};

// Helper function to print test results
void printTestResult(int testNum, vector<int>& nums, int target, int result, int expected) {
    cout << "Test " << testNum << ": nums = [";
    for (int i = 0; i < nums.size(); i++) {
        cout << nums[i];
        if (i < nums.size() - 1) cout << ",";
    }
    cout << "], target = " << target << endl;
    cout << "Result: " << result << ", Expected: " << expected;
    cout << (result == expected ? " ✓" : " ✗") << endl << endl;
}

int main() {
    Solution sol;

    // Test case 1: nums = [1,3,5,6], target = 5
    cout << "=== LeetCode 35: Search Insert Position ===" << endl << endl;

    vector<int> nums1 = {1, 3, 5, 6};
    int target1 = 5;
    int result1 = sol.searchInsert(nums1, target1);
    printTestResult(1, nums1, target1, result1, 2);
    assert(result1 == 2);

    // Test case 2: nums = [1,3,5,6], target = 2
    vector<int> nums2 = {1, 3, 5, 6};
    int target2 = 2;
    int result2 = sol.searchInsert(nums2, target2);
    printTestResult(2, nums2, target2, result2, 1);
    assert(result2 == 1);

    // Test case 3: nums = [1,3,5,6], target = 7
    vector<int> nums3 = {1, 3, 5, 6};
    int target3 = 7;
    int result3 = sol.searchInsert(nums3, target3);
    printTestResult(3, nums3, target3, result3, 4);
    assert(result3 == 4);

    // Additional test cases

    // Test case 4: nums = [1,3,5,6], target = 0 (insert at beginning)
    vector<int> nums4 = {1, 3, 5, 6};
    int target4 = 0;
    int result4 = sol.searchInsert(nums4, target4);
    printTestResult(4, nums4, target4, result4, 0);
    assert(result4 == 0);

    // Test case 5: nums = [1], target = 1 (single element, found)
    vector<int> nums5 = {1};
    int target5 = 1;
    int result5 = sol.searchInsert(nums5, target5);
    printTestResult(5, nums5, target5, result5, 0);
    assert(result5 == 0);

    // Test case 6: nums = [1], target = 0 (single element, insert before)
    vector<int> nums6 = {1};
    int target6 = 0;
    int result6 = sol.searchInsert(nums6, target6);
    printTestResult(6, nums6, target6, result6, 0);
    assert(result6 == 0);

    // Test case 7: nums = [1], target = 2 (single element, insert after)
    vector<int> nums7 = {1};
    int target7 = 2;
    int result7 = sol.searchInsert(nums7, target7);
    printTestResult(7, nums7, target7, result7, 1);
    assert(result7 == 1);

    // Test case 8: Compare binary search vs linear search
    cout << "=== Performance Comparison ===" << endl;
    vector<int> nums8 = {1, 3, 5, 6, 8, 10, 12, 14, 16, 18};
    int target8 = 13;

    int binaryResult = sol.searchInsert(nums8, target8);
    int linearResult = sol.searchInsertLinear(nums8, target8);

    cout << "Binary Search Result: " << binaryResult << endl;
    cout << "Linear Search Result: " << linearResult << endl;
    cout << "Both methods should give same result: " << (binaryResult == linearResult ? "✓" : "✗") << endl << endl;

    cout << "=== Algorithm Analysis ===" << endl;
    cout << "Binary Search: Time O(log n), Space O(1) - Optimal for this problem" << endl;
    cout << "Linear Search: Time O(n), Space O(1) - Simpler but slower" << endl << endl;

    cout << "=== Key Insight ===" << endl;
    cout << "When binary search ends without finding target:" << endl;
    cout << "- 'left' pointer points to the insertion position" << endl;
    cout << "- This works because 'left' always points to first element >= target" << endl;

    cout << "\nAll tests passed! ✓" << endl;

    return 0;
}

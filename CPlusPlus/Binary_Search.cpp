//
// Created by binghuan on 2025/9/6.
// Simple Binary Search Demo
//

#include <iostream>
#include <vector>
using namespace std;

// 簡單的二分搜尋函數
int binarySearch(vector<int>& nums, int target) {
    int left = 0;
    int right = nums.size() - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;

        if (nums[mid] == target) {
            return mid;  // 找到目標，返回索引
        } else if (nums[mid] < target) {
            left = mid + 1;  // 在右半部搜尋
        } else {
            right = mid - 1; // 在左半部搜尋
        }
    }

    return -1;  // 沒找到
}

int main() {
    // 測試數組（必須是有序的）
    vector<int> nums = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};

    cout << "數組: ";
    for (int num : nums) {
        cout << num << " ";
    }
    cout << endl;

    // 測試幾個例子
    int targets[] = {7, 1, 19, 8, 15};

    for (int target : targets) {
        int result = binarySearch(nums, target);

        if (result != -1) {
            cout << "找到 " << target << " 在索引 " << result << endl;
        } else {
            cout << "沒有找到 " << target << endl;
        }
    }

    return 0;
}

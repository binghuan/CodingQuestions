#include <iostream>
#include <vector>
using namespace std;
//
// Created by binghuan on 2025/9/2.
//


class Solution {
public:
    int removeElement(vector<int>& nums, int val) {
        int k = 0; // Pointer for the next position to write
        for (int i = 0; i < nums.size(); ++i) {
            if (nums[i] != val) {
                nums[k] = nums[i]; // Overwrite nums[k] with nums[i] if not equal to val
                k++; // Move the write pointer forward
            }
        }
        return k; // k is the number of elements not equal to val
    }
};

int main() {
    Solution sol;
    vector<int> nums1 = {3,2,2,3};
    int val1 = 3;
    int k1 = sol.removeElement(nums1, val1);
    cout << "Test case 1: k = " << k1 << ", nums = [";
    for (int i = 0; i < k1; ++i) cout << nums1[i] << (i < k1-1 ? "," : "");
    cout << "]\n";

    vector<int> nums2 = {0,1,2,2,3,0,4,2};
    int val2 = 2;
    int k2 = sol.removeElement(nums2, val2);
    cout << "Test case 2: k = " << k2 << ", nums = [";
    for (int i = 0; i < k2; ++i) cout << nums2[i] << (i < k2-1 ? "," : "");
    cout << "]\n";

    vector<int> nums3 = {};
    int val3 = 1;
    int k3 = sol.removeElement(nums3, val3);
    cout << "Test case 3: k = " << k3 << ", nums = [";
    for (int i = 0; i < k3; ++i) cout << nums3[i] << (i < k3-1 ? "," : "");
    cout << "]\n";

    vector<int> nums4 = {1,1,1,1};
    int val4 = 1;
    int k4 = sol.removeElement(nums4, val4);
    cout << "Test case 4: k = " << k4 << ", nums = [";
    for (int i = 0; i < k4; ++i) cout << nums4[i] << (i < k4-1 ? "," : "");
    cout << "]\n";

    vector<int> nums5 = {2,3,4,5};
    int val5 = 1;
    int k5 = sol.removeElement(nums5, val5);
    cout << "Test case 5: k = " << k5 << ", nums = [";
    for (int i = 0; i < k5; ++i) cout << nums5[i] << (i < k5-1 ? "," : "");
    cout << "]\n";

    return 0;
}

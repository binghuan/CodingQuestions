//
// Created by binghuan on 2025/9/5.
//

#include <iostream>
#include <vector>
using namespace std;

class Solution {
public:
    // Approach: Use negative marking technique
    // Since nums[i] is in range [1, n], we can use array indices as hash keys
    vector<int> findDuplicates(vector<int> &nums) {
        vector<int> result;

        // For each number, mark the corresponding index as visited by making it negative
        for (int i = 0; i < nums.size(); i++) {
            int index = abs(nums[i]) - 1; // Convert to 0-based index

            // If the value at this index is already negative,
            // it means we've seen this number before (duplicate)
            if (nums[index] < 0) {
                result.push_back(abs(nums[i]));
            } else {
                // Mark as visited by making it negative
                nums[index] = -nums[index];
            }
        }

        return result;
    }

    // Alternative approach: Using cyclic sort concept
    vector<int> findDuplicatesCyclicSort(vector<int> &nums) {
        vector<int> result;

        // Place each number at its correct position (nums[i] should be at index nums[i]-1)
        for (int i = 0; i < nums.size(); i++) {
            while (nums[i] != nums[nums[i] - 1]) {
                swap(nums[i], nums[nums[i] - 1]);
            }
        }

        // Find numbers that are not at their correct positions
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != i + 1) {
                result.push_back(nums[i]);
            }
        }

        return result;
    }
};

// Helper function to print vector
void printVector(const vector<int> &vec, const string &name) {
    cout << name << ": [";
    for (int i = 0; i < vec.size(); i++) {
        cout << vec[i];
        if (i < vec.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;

    // Test case 1: nums = [4,3,2,7,8,2,3,1]
    cout << "Test Case 1:" << endl;
    vector<int> nums1 = {4, 3, 2, 7, 8, 2, 3, 1};
    cout << "Input: ";
    printVector(nums1, "nums");

    vector<int> nums1_copy = nums1; // Keep original for second method
    auto result1 = sol.findDuplicates(nums1);
    printVector(result1, "Output (Negative Marking)");

    auto result1_alt = sol.findDuplicatesCyclicSort(nums1_copy);
    printVector(result1_alt, "Output (Cyclic Sort)");
    cout << "Expected: [2,3]" << endl << endl;

    // Test case 2: nums = [1,1,2]
    cout << "Test Case 2:" << endl;
    vector<int> nums2 = {1, 1, 2};
    cout << "Input: ";
    printVector(nums2, "nums");

    vector<int> nums2_copy = nums2;
    auto result2 = sol.findDuplicates(nums2);
    printVector(result2, "Output (Negative Marking)");

    auto result2_alt = sol.findDuplicatesCyclicSort(nums2_copy);
    printVector(result2_alt, "Output (Cyclic Sort)");
    cout << "Expected: [1]" << endl << endl;

    // Test case 3: nums = [1]
    cout << "Test Case 3:" << endl;
    vector<int> nums3 = {1};
    cout << "Input: ";
    printVector(nums3, "nums");

    vector<int> nums3_copy = nums3;
    auto result3 = sol.findDuplicates(nums3);
    printVector(result3, "Output (Negative Marking)");

    auto result3_alt = sol.findDuplicatesCyclicSort(nums3_copy);
    printVector(result3_alt, "Output (Cyclic Sort)");
    cout << "Expected: []" << endl << endl;

    // Test case 4: nums = [2,2] - edge case
    cout << "Test Case 4 (Edge Case):" << endl;
    vector<int> nums4 = {2, 2};
    cout << "Input: ";
    printVector(nums4, "nums");

    vector<int> nums4_copy = nums4;
    auto result4 = sol.findDuplicates(nums4);
    printVector(result4, "Output (Negative Marking)");

    auto result4_alt = sol.findDuplicatesCyclicSort(nums4_copy);
    printVector(result4_alt, "Output (Cyclic Sort)");
    cout << "Expected: [2]" << endl << endl;

    // Test case 5: nums = [3,3,3] - not possible according to constraints but testing
    cout << "Test Case 5 (No Duplicates):" << endl;
    vector<int> nums5 = {1, 2, 3, 4, 5};
    cout << "Input: ";
    printVector(nums5, "nums");

    vector<int> nums5_copy = nums5;
    auto result5 = sol.findDuplicates(nums5);
    printVector(result5, "Output (Negative Marking)");

    auto result5_alt = sol.findDuplicatesCyclicSort(nums5_copy);
    printVector(result5_alt, "Output (Cyclic Sort)");
    cout << "Expected: []" << endl;

    cout << "\n=== Algorithm Explanation ===" << endl;
    cout << "Negative Marking: Mark visited indices by making values negative" << endl;
    cout << "Time: O(n), Space: O(1) excluding output" << endl;
    cout << "Cyclic Sort: Place each number at its correct position" << endl;
    cout << "Time: O(n), Space: O(1) excluding output" << endl;

    return 0;
}

//
// Created by binghuan on 2025/9/5.
//

#include <iostream>
#include <vector>
#include <queue>
#include <set>
using namespace std;

class Solution {
public:
    vector<vector<int>> kSmallestPairs(vector<int>& nums1, vector<int>& nums2, int k) {
        // Result vector to store k smallest pairs
        vector<vector<int>> result;

        // Edge case: if either array is empty
        if (nums1.empty() || nums2.empty() || k <= 0) {
            return result;
        }

        // Min-heap to store pairs based on their sum
        // Each element: {sum, {index1, index2}}
        priority_queue<pair<int, pair<int, int>>,
                      vector<pair<int, pair<int, int>>>,
                      greater<pair<int, pair<int, int>>>> minHeap;

        // Set to avoid duplicate pairs
        set<pair<int, int>> visited;

        // Start with the smallest possible pair (0, 0)
        minHeap.push({nums1[0] + nums2[0], {0, 0}});
        visited.insert({0, 0});

        // Extract k smallest pairs
        while (result.size() < k && !minHeap.empty()) {
            // Get the pair with minimum sum
            auto current = minHeap.top();
            minHeap.pop();

            int sum = current.first;
            int i = current.second.first;   // index in nums1
            int j = current.second.second;  // index in nums2

            // Add this pair to result
            result.push_back({nums1[i], nums2[j]});

            // Add adjacent pairs to heap if they haven't been visited
            // Move right in nums2 (same element from nums1, next element from nums2)
            if (j + 1 < nums2.size() && visited.find({i, j + 1}) == visited.end()) {
                minHeap.push({nums1[i] + nums2[j + 1], {i, j + 1}});
                visited.insert({i, j + 1});
            }

            // Move down in nums1 (next element from nums1, same element from nums2)
            if (i + 1 < nums1.size() && visited.find({i + 1, j}) == visited.end()) {
                minHeap.push({nums1[i + 1] + nums2[j], {i + 1, j}});
                visited.insert({i + 1, j});
            }
        }

        return result;
    }

    // Alternative optimized solution - only consider first k elements from nums1
    vector<vector<int>> kSmallestPairsOptimized(vector<int>& nums1, vector<int>& nums2, int k) {
        vector<vector<int>> result;

        if (nums1.empty() || nums2.empty() || k <= 0) {
            return result;
        }

        // Min-heap to store pairs: {sum, {i, j}}
        priority_queue<pair<int, pair<int, int>>,
                      vector<pair<int, pair<int, int>>>,
                      greater<pair<int, pair<int, int>>>> minHeap;

        // Only consider first min(k, nums1.size()) elements from nums1
        // This optimization reduces the search space
        int limit = min(k, (int)nums1.size());

        // Initialize heap with pairs (nums1[i], nums2[0]) for i = 0 to limit-1
        for (int i = 0; i < limit; i++) {
            minHeap.push({nums1[i] + nums2[0], {i, 0}});
        }

        // Extract k smallest pairs
        while (result.size() < k && !minHeap.empty()) {
            auto current = minHeap.top();
            minHeap.pop();

            int i = current.second.first;
            int j = current.second.second;

            result.push_back({nums1[i], nums2[j]});

            // Add next pair from the same row if exists
            if (j + 1 < nums2.size()) {
                minHeap.push({nums1[i] + nums2[j + 1], {i, j + 1}});
            }
        }

        return result;
    }
};

// Helper function to print pairs
void printPairs(const vector<vector<int>>& pairs, const string& testName) {
    cout << testName << ": [";
    for (int i = 0; i < pairs.size(); i++) {
        cout << "[" << pairs[i][0] << "," << pairs[i][1] << "]";
        if (i < pairs.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;

    // Test case 1: nums1 = [1,7,11], nums2 = [2,4,6], k = 3
    cout << "Test Case 1:" << endl;
    vector<int> nums1_1 = {1, 7, 11};
    vector<int> nums2_1 = {2, 4, 6};
    int k1 = 3;

    cout << "Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3" << endl;
    auto result1 = sol.kSmallestPairs(nums1_1, nums2_1, k1);
    printPairs(result1, "Output");
    cout << "Expected: [[1,2],[1,4],[1,6]]" << endl << endl;

    // Test case 2: nums1 = [1,1,2], nums2 = [1,2,3], k = 2
    cout << "Test Case 2:" << endl;
    vector<int> nums1_2 = {1, 1, 2};
    vector<int> nums2_2 = {1, 2, 3};
    int k2 = 2;

    cout << "Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2" << endl;
    auto result2 = sol.kSmallestPairs(nums1_2, nums2_2, k2);
    printPairs(result2, "Output");
    cout << "Expected: [[1,1],[1,1]]" << endl << endl;

    // Test case 3: nums1 = [1,2], nums2 = [3], k = 3
    cout << "Test Case 3:" << endl;
    vector<int> nums1_3 = {1, 2};
    vector<int> nums2_3 = {3};
    int k3 = 3;

    cout << "Input: nums1 = [1,2], nums2 = [3], k = 3" << endl;
    auto result3 = sol.kSmallestPairs(nums1_3, nums2_3, k3);
    printPairs(result3, "Output");
    cout << "Expected: [[1,3],[2,3]]" << endl << endl;

    // Test case 4: Test optimized version
    cout << "Test Case 4 (Optimized Version):" << endl;
    vector<int> nums1_4 = {1, 7, 11};
    vector<int> nums2_4 = {2, 4, 6};
    int k4 = 3;

    cout << "Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3" << endl;
    auto result4 = sol.kSmallestPairsOptimized(nums1_4, nums2_4, k4);
    printPairs(result4, "Output (Optimized)");
    cout << "Expected: [[1,2],[1,4],[1,6]]" << endl << endl;

    // Test case 5: Large k value
    cout << "Test Case 5 (Large K):" << endl;
    vector<int> nums1_5 = {1, 2, 3};
    vector<int> nums2_5 = {1, 2, 3};
    int k5 = 9;

    cout << "Input: nums1 = [1,2,3], nums2 = [1,2,3], k = 9" << endl;
    auto result5 = sol.kSmallestPairs(nums1_5, nums2_5, k5);
    printPairs(result5, "Output");
    cout << "This should return all 9 possible pairs sorted by sum" << endl;

    return 0;
}

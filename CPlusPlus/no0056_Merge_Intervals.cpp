//
// Created by binghuan on 2025/9/4.
//

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        if (intervals.empty()) return {};

        // Sort intervals by start time
        sort(intervals.begin(), intervals.end());

        vector<vector<int>> result;
        result.push_back(intervals[0]);

        for (int i = 1; i < intervals.size(); i++) {
            // If current interval overlaps with the last interval in result
            if (intervals[i][0] <= result.back()[1]) {
                // Merge intervals by updating the end time
                result.back()[1] = max(result.back()[1], intervals[i][1]);
            } else {
                // No overlap, add current interval to result
                result.push_back(intervals[i]);
            }
        }

        return result;
    }
};

// Helper function to print intervals
void printIntervals(const vector<vector<int>>& intervals) {
    cout << "[";
    for (int i = 0; i < intervals.size(); i++) {
        cout << "[" << intervals[i][0] << "," << intervals[i][1] << "]";
        if (i < intervals.size() - 1) cout << ",";
    }
    cout << "]" << endl;
}

int main() {
    Solution sol;

    cout << "Testing Merge Intervals:" << endl;

    // Test case 1: [[1,3],[2,6],[8,10],[15,18]]
    cout << "\nTest case 1:" << endl;
    vector<vector<int>> intervals1 = {{1,3},{2,6},{8,10},{15,18}};
    cout << "Input: ";
    printIntervals(intervals1);
    vector<vector<int>> result1 = sol.merge(intervals1);
    cout << "Output: ";
    printIntervals(result1);
    cout << "Expected: [[1,6],[8,10],[15,18]]" << endl;

    // Test case 2: [[1,4],[4,5]]
    cout << "\nTest case 2:" << endl;
    vector<vector<int>> intervals2 = {{1,4},{4,5}};
    cout << "Input: ";
    printIntervals(intervals2);
    vector<vector<int>> result2 = sol.merge(intervals2);
    cout << "Output: ";
    printIntervals(result2);
    cout << "Expected: [[1,5]]" << endl;

    // Test case 3: [[1,4],[2,3]]
    cout << "\nTest case 3:" << endl;
    vector<vector<int>> intervals3 = {{1,4},{2,3}};
    cout << "Input: ";
    printIntervals(intervals3);
    vector<vector<int>> result3 = sol.merge(intervals3);
    cout << "Output: ";
    printIntervals(result3);
    cout << "Expected: [[1,4]]" << endl;

    // Test case 4: [[1,3],[2,6],[8,10],[9,12],[15,18]]
    cout << "\nTest case 4:" << endl;
    vector<vector<int>> intervals4 = {{1,3},{2,6},{8,10},{9,12},{15,18}};
    cout << "Input: ";
    printIntervals(intervals4);
    vector<vector<int>> result4 = sol.merge(intervals4);
    cout << "Output: ";
    printIntervals(result4);
    cout << "Expected: [[1,6],[8,12],[15,18]]" << endl;

    // Test case 5: Single interval
    cout << "\nTest case 5:" << endl;
    vector<vector<int>> intervals5 = {{1,4}};
    cout << "Input: ";
    printIntervals(intervals5);
    vector<vector<int>> result5 = sol.merge(intervals5);
    cout << "Output: ";
    printIntervals(result5);
    cout << "Expected: [[1,4]]" << endl;

    cout << "\nAll tests completed!" << endl;
    return 0;
}

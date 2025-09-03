//
// Created by binghuan on 2025/8/20.
//

#include <unordered_map> // unordered_map: hash-based key->value container
#include <stdexcept>    // exceptions (e.g., std::runtime_error)
#include <iostream>     // I/O streams (std::cout, etc.)
#include <vector>       // std::vector container

using namespace std;

// LeetCode-style solution class wrapping the function as a method
class Solution {
    // define class Solution
public: // public members
    // Two Sum: return indices i, j such that nums[i] + nums[j] == target
    vector<int> twoSum(vector<int> &nums, int target) {
        // input array by reference and target sum
        unordered_map<int, int> seen; // map value -> index for numbers we've seen
        for (int i = 0; i < (int) nums.size(); ++i) {
            // iterate indices from left to right
            int complement = target - nums[i]; // the needed counterpart to reach target
            auto it = seen.find(complement); // check if the complement was seen before
            if (it != seen.end()) {
                // if found, we have a valid pair
                return {it->second, i}; // return indices: index of complement and current i
            }
            seen[nums[i]] = i; // record current value and its index for future checks
        }
        throw runtime_error("No solution found"); // safety: throw if no pair exists
    }
}; // end of class

static void printVec(const vector<int> &v) {
    // helper: print vector as [a,b,c]
    cout << "["; // opening bracket
    for (size_t i = 0; i < v.size(); ++i) {
        // print each element
        cout << v[i] << (i + 1 == v.size() ? "" : ","); // comma between elements, none after last
    }
    cout << "]\n"; // closing bracket and newline
}

int main() {
    // entry point: simple local tests
    Solution sol; // create solver instance

    vector<int> a{2, 7, 11, 15}; // test case 1
    printVec(sol.twoSum(a, 9)); // expected: [0,1]

    vector<int> b{3, 2, 4}; // test case 2
    printVec(sol.twoSum(b, 6)); // expected: [1,2]

    vector<int> c{3, 3}; // test case 3
    printVec(sol.twoSum(c, 6)); // expected: [0,1]
    return 0; // normal exit
}

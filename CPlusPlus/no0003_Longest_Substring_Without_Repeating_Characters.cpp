#include <iostream>
#include <unordered_set>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> charIndex; // Record the last occurrence of each character
        int maxLength = 0;
        int left = 0; // Left pointer of the sliding window

        for (int right = 0; right < s.length(); ++right) {
            char c = s[right];
            // If the character has been seen before and is within the current window
            if (charIndex.find(c) != charIndex.end() && charIndex[c] >= left) {
                left = charIndex[c] + 1; // Move the left pointer to the position after the duplicate character
            }
            // Update the last occurrence of the character
            charIndex[c] = right;
            // Update the maximum length of the substring without repeating characters
            maxLength = max(maxLength, right - left + 1);
        }

        return maxLength;
    }
};

int main() {
    Solution solution;

    // Test cases
    vector<pair<string, int>> testCases = {
        {"abcabcbb", 3},
        {"bbbbb", 1},
        {"pwwkew", 3},
        {"", 0},
        {"abcdef", 6},
        {"aabbcc", 2},
        {"dvdf", 3}
    };

    for (const auto& testCase : testCases) {
        string input = testCase.first;
        int expected = testCase.second;
        int result = solution.lengthOfLongestSubstring(input);
        cout << "Input: " << input << "\n";
        cout << "Expected: " << expected << ", Got: " << result << "\n";
        cout << (result == expected ? "PASS" : "FAIL") << "\n\n";
    }

    return 0;
}

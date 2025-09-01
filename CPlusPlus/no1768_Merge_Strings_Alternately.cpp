#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    string mergeAlternately(string word1, string word2) {
        string merged;
        int i = 0, j = 0;

        // Merge characters alternately from both strings
        while (i < word1.length() && j < word2.length()) {
            merged += word1[i++];
            merged += word2[j++];
        }

        // Append remaining characters from word1, if any
        while (i < word1.length()) {
            merged += word1[i++];
        }

        // Append remaining characters from word2, if any
        while (j < word2.length()) {
            merged += word2[j++];
        }

        return merged;
    }
};

int main() {
    Solution solution;

    // Test cases
    cout << "Test Case 1: " << solution.mergeAlternately("abc", "pqr") << "\n"; // Expected: "apbqcr"
    cout << "Test Case 2: " << solution.mergeAlternately("ab", "pqrs") << "\n"; // Expected: "apbqrs"
    cout << "Test Case 3: " << solution.mergeAlternately("abcd", "pq") << "\n"; // Expected: "apbqcd"
    cout << "Test Case 4: " << solution.mergeAlternately("a", "b") << "\n"; // Expected: "ab"
    cout << "Test Case 5: " << solution.mergeAlternately("", "xyz") << "\n"; // Expected: "xyz"

    return 0;
}
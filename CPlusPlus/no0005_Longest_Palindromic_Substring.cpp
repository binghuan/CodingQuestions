//
// Created by binghuan on 2025/9/6.
//

#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    // Main solution using center expansion approach
    string longestPalindrome(string s) {
        if (s.empty()) {
            return "";
        }

        int start = 0;
        int maxLen = 1;

        for (int i = 0; i < s.length(); i++) {
            // Check for odd length palindromes (center at i)
            int len1 = expandAroundCenter(s, i, i);

            // Check for even length palindromes (center between i and i+1)
            int len2 = expandAroundCenter(s, i, i + 1);

            int currentMaxLen = max(len1, len2);

            // Update the longest palindrome if we found a longer one
            if (currentMaxLen > maxLen) {
                maxLen = currentMaxLen;
                start = i - (currentMaxLen - 1) / 2;
            }
        }

        return s.substr(start, maxLen);
    }

    // Helper function to expand around center and return palindrome length
    int expandAroundCenter(const string& s, int left, int right) {
        // Expand while characters match and indices are valid
        while (left >= 0 && right < s.length() && s[left] == s[right]) {
            left--;
            right++;
        }

        // Return length of palindrome found
        return right - left - 1;
    }

    // Alternative solution using dynamic programming
    string longestPalindromeDP(string s) {
        int n = s.length();
        if (n == 0) return "";

        // dp[i][j] represents whether substring from i to j is palindrome
        vector<vector<bool>> dp(n, vector<bool>(n, false));

        int start = 0;
        int maxLen = 1;

        // Every single character is a palindrome
        for (int i = 0; i < n; i++) {
            dp[i][i] = true;
        }

        // Check for palindromes of length 2
        for (int i = 0; i < n - 1; i++) {
            if (s[i] == s[i + 1]) {
                dp[i][i + 1] = true;
                start = i;
                maxLen = 2;
            }
        }

        // Check for palindromes of length 3 and more
        for (int len = 3; len <= n; len++) {
            for (int i = 0; i < n - len + 1; i++) {
                int j = i + len - 1;

                // Check if substring from i to j is palindrome
                if (s[i] == s[j] && dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    if (len > maxLen) {
                        start = i;
                        maxLen = len;
                    }
                }
            }
        }

        return s.substr(start, maxLen);
    }

    // Brute force solution (for comparison)
    string longestPalindromeBruteForce(string s) {
        int n = s.length();
        string result = "";

        // Check all possible substrings
        for (int i = 0; i < n; i++) {
            for (int j = i; j < n; j++) {
                string substring = s.substr(i, j - i + 1);
                if (isPalindrome(substring) && substring.length() > result.length()) {
                    result = substring;
                }
            }
        }

        return result;
    }

    // Helper function to check if a string is palindrome
    bool isPalindrome(const string& str) {
        int left = 0, right = str.length() - 1;
        while (left < right) {
            if (str[left] != str[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};

int main() {
    Solution sol;

    // Test case 1: "babad"
    cout << "Test Case 1:" << endl;
    string s1 = "babad";
    cout << "Input: \"" << s1 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s1) << "\"" << endl;
    cout << "Output (DP): \"" << sol.longestPalindromeDP(s1) << "\"" << endl;
    cout << "Output (Brute Force): \"" << sol.longestPalindromeBruteForce(s1) << "\"" << endl;
    cout << "Expected: \"bab\" or \"aba\"" << endl << endl;

    // Test case 2: "cbbd"
    cout << "Test Case 2:" << endl;
    string s2 = "cbbd";
    cout << "Input: \"" << s2 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s2) << "\"" << endl;
    cout << "Output (DP): \"" << sol.longestPalindromeDP(s2) << "\"" << endl;
    cout << "Output (Brute Force): \"" << sol.longestPalindromeBruteForce(s2) << "\"" << endl;
    cout << "Expected: \"bb\"" << endl << endl;

    // Test case 3: "a"
    cout << "Test Case 3:" << endl;
    string s3 = "a";
    cout << "Input: \"" << s3 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s3) << "\"" << endl;
    cout << "Expected: \"a\"" << endl << endl;

    // Test case 4: "ac"
    cout << "Test Case 4:" << endl;
    string s4 = "ac";
    cout << "Input: \"" << s4 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s4) << "\"" << endl;
    cout << "Expected: \"a\" or \"c\"" << endl << endl;

    // Test case 5: "racecar"
    cout << "Test Case 5:" << endl;
    string s5 = "racecar";
    cout << "Input: \"" << s5 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s5) << "\"" << endl;
    cout << "Expected: \"racecar\"" << endl << endl;

    // Test case 6: "noon"
    cout << "Test Case 6:" << endl;
    string s6 = "noon";
    cout << "Input: \"" << s6 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s6) << "\"" << endl;
    cout << "Expected: \"noon\"" << endl << endl;

    // Test case 7: Empty string
    cout << "Test Case 7:" << endl;
    string s7 = "";
    cout << "Input: \"" << s7 << "\"" << endl;
    cout << "Output (Center Expansion): \"" << sol.longestPalindrome(s7) << "\"" << endl;
    cout << "Expected: \"\"" << endl << endl;

    cout << "=== Algorithm Comparison ===" << endl;
    cout << "1. Center Expansion: Time O(n²), Space O(1) - Most efficient" << endl;
    cout << "2. Dynamic Programming: Time O(n²), Space O(n²)" << endl;
    cout << "3. Brute Force: Time O(n³), Space O(1) - Slowest" << endl;

    return 0;
}

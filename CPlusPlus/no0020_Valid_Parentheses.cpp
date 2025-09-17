//
// Created by binghuan on 2025/9/17.
//
#include <iostream>
#include <stack>
#include <string>
#include <vector>
using namespace std;

class Solution {
public:
    bool isValid(string s) {
        stack<char> st; // Stack to store opening brackets

        for (char c : s) {
            // If it's an opening bracket, push to stack
            if (c == '(' || c == '{' || c == '[') {
                st.push(c);
            }
            // If it's a closing bracket
            else if (c == ')' || c == '}' || c == ']') {
                // If stack is empty, no matching opening bracket
                if (st.empty()) {
                    return false;
                }

                char top = st.top();
                st.pop();

                // Check if the closing bracket matches the opening bracket
                if ((c == ')' && top != '(') ||
                    (c == '}' && top != '{') ||
                    (c == ']' && top != '[')) {
                    return false;
                }
            }
        }

        // If stack is empty, all brackets are properly matched
        return st.empty();
    }
};

// Test function
void testCase(const string& s, bool expected) {
    Solution solution;
    bool result = solution.isValid(s);
    cout << "Input: \"" << s << "\" -> Output: " << (result ? "true" : "false");
    cout << " (Expected: " << (expected ? "true" : "false") << ")";
    cout << " [" << (result == expected ? "PASS" : "FAIL") << "]" << endl;
}

int main() {
    cout << "=== LeetCode 20: Valid Parentheses ===" << endl;
    cout << endl;

    // Test cases from the problem
    testCase("()", true);           // Example 1
    testCase("()[]{}", true);       // Example 2
    testCase("(]", false);          // Example 3
    testCase("([])", true);         // Example 4
    testCase("([)]", false);        // Example 5

    // Additional test cases
    testCase("", true);             // Empty string
    testCase("((()))", true);       // Nested parentheses
    testCase("()[]", true);         // Multiple pairs
    testCase("(())", true);         // Nested single type
    testCase("({[]})", true);       // All types nested
    testCase("({[}])", false);      // Wrong order
    testCase("((", false);          // Only opening
    testCase("))", false);          // Only closing
    testCase("())", false);         // Extra closing
    testCase("(()", false);         // Extra opening

    cout << endl;
    cout << "Test completed!" << endl;

    return 0;
}

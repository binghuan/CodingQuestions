//
// Created by binghuan on 2025/9/7.
//

#include <iostream>
#include <string>
using namespace std;

class Solution {
public:
    int lengthOfLastWord(string s) {
        // Start from the end and skip trailing spaces
        int end = s.length() - 1;
        while (end >= 0 && s[end] == ' ') {
            end--;
        }

        // Count the length of the last word
        int length = 0;
        while (end >= 0 && s[end] != ' ') {
            length++;
            end--;
        }

        return length;
    }
};

int main() {
    Solution solution;

    // Test cases
    cout << "Test Case 1:" << endl;
    string s1 = "Hello World";
    cout << "Input: \"" << s1 << "\"" << endl;
    cout << "Output: " << solution.lengthOfLastWord(s1) << endl;
    cout << "Expected: 5" << endl << endl;

    cout << "Test Case 2:" << endl;
    string s2 = "   fly me   to   the moon  ";
    cout << "Input: \"" << s2 << "\"" << endl;
    cout << "Output: " << solution.lengthOfLastWord(s2) << endl;
    cout << "Expected: 4" << endl << endl;

    cout << "Test Case 3:" << endl;
    string s3 = "luffy is still joyboy";
    cout << "Input: \"" << s3 << "\"" << endl;
    cout << "Output: " << solution.lengthOfLastWord(s3) << endl;
    cout << "Expected: 6" << endl << endl;

    // Additional edge cases
    cout << "Test Case 4 (single word):" << endl;
    string s4 = "hello";
    cout << "Input: \"" << s4 << "\"" << endl;
    cout << "Output: " << solution.lengthOfLastWord(s4) << endl;
    cout << "Expected: 5" << endl << endl;

    cout << "Test Case 5 (word with leading spaces):" << endl;
    string s5 = "   hello";
    cout << "Input: \"" << s5 << "\"" << endl;
    cout << "Output: " << solution.lengthOfLastWord(s5) << endl;
    cout << "Expected: 5" << endl << endl;

    return 0;
}

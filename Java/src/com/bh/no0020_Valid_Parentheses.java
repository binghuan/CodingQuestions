package com.bh;

import java.util.Stack;

/**
 * LeetCode 20: Valid Parentheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 * determine if the input string is valid.
 * 
 * A string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * 3. Every close bracket has a corresponding open bracket of the same type.
 */
public class no0020_Valid_Parentheses {

    static class Solution {
        public boolean isValid(String s) {
            Stack<Character> stack = new Stack<>();
            for (char c : s.toCharArray()) {
                if (c == '(' || c == '[' || c == '{') {
                    stack.push(c);
                } else {
                    if (stack.isEmpty()) return false;
                    char top = stack.pop();
                    if (c == ')' && top != '(') return false;
                    if (c == ']' && top != '[') return false;
                    if (c == '}' && top != '{') return false;
                }
            }
            return stack.isEmpty();
        }
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        // Test cases
        String[] testCases = {"()", "()[]{}", "(]", "([])", "([)]", "{[]}", "(", ")", "", "(((())))"};
        boolean[] expected = {true, true, false, true, false, true, false, false, true, true};
        for (int i = 0; i < testCases.length; i++) {
            boolean result = solution.isValid(testCases[i]);
            System.out.println("Input: '" + testCases[i] + "' | Output: " + result + " | Expected: " + expected[i]);
        }
    }
}


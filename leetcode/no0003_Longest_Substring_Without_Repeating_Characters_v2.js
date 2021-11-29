/* 
3. Longest Substring Without Repeating Characters

Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let length = s.length;
    let charIndexMap = {};
    let startIndex = 0;
    let maxLength = 0;
    for (let i = 0; i < length; i++) {
        let char = s[i];
        if(charIndexMap[char] == null) {
            charIndexMap[char] = -1;
        }
        startIndex = Math.max(startIndex,charIndexMap[s[i]] + 1);
        maxLength = Math.max(maxLength, i - startIndex + 1); 
        charIndexMap[char] = i;
    }

    console.log("OUTPUT:", maxLength);
    return maxLength;
};
let DBG = false;

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
DBG = true;
lengthOfLongestSubstring("abcabcbb")
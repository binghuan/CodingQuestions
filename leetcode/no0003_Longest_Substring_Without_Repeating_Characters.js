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
    console.log("INPUT:", s);
    let length = s.length;
    let charIndexMap = {};
    let startIndex = 0;
    let maxLength = 0;
    for (let i = 0; i < length; i++) {
        let char = s[i];
        if (DBG) console.log(`+++ Start checking char by index[${i}]= ${char} +++`);
        if (charIndexMap[char] == null) {
            charIndexMap[char] = -1;
            console.log(`"${char}" was not found in charIndexMap`, charIndexMap);
        } else {
            console.log(`"${char}" was found in charIndexMap`, charIndexMap);
        }
        if (DBG) console.log(`startIndex = ${startIndex}, charIndexMap[s[i]] = ${charIndexMap[s[i]]}`);
        let bypassIndexOfChar = charIndexMap[s[i]] + 1;
        startIndex = Math.max(startIndex, bypassIndexOfChar);
        if (DBG) console.log("startIndex -> ", startIndex);
        let currentLength = i - startIndex + 1;
        if (DBG) console.log(`last max length of non-repeating string = ${maxLength}, now is ${currentLength}`);
        maxLength = Math.max(maxLength, currentLength);
        if (DBG) console.log("!!max length = ", maxLength);
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
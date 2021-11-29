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
let lengthOfLongestSubstring = function (s) {
    console.log(">> lengthOfLongestSubstring:", s);

    let temp = "", ans = "";
    for (let i = 0; i < s.length; i++) {
        if (DBG) console.log("check ", s[i], " in ", temp, temp.indexOf([s[i]]));
        let pos = temp.indexOf([s[i]])
        if (temp.indexOf([s[i]]) === -1) {
            temp += "" + s[i];
            if (DBG) console.log("--> Append", s[i], " --> ", temp);
        } else {
            if (temp.length > ans.length) {
                ans = temp;
            }
            temp += s[i];
            temp = temp.substring(pos + 1);
            if (DBG) console.log("--> Reset ", s[i], " --> ", temp);
        }
    }
    if (temp.length > ans.length) {
        ans = temp;
    }
    if (DBG) console.log("######## ANSWER: ", ans, ans.length);
    return ans.length;
};
let DBG = false;

/*
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
*/
DBG = true;
lengthOfLongestSubstring("abcabcbb")
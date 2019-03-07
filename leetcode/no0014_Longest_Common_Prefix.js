// link: https://leetcode.com/problems/longest-common-prefix/
/*
    Write a function to find the longest common prefix string amongst an array of strings.

    If there is no common prefix, return an empty string "".

    Example 1:

    Input: ["flower","flow","flight"]
    Output: "fl"
    Example 2:

    Input: ["dog","racecar","car"]
    Output: ""
    Explanation: There is no common prefix among the input strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    const DBG = true;
    if (DBG) console.log("## INPUT: ", strs);

    let prepend = "";
    if (strs.length > 0) {
        let firstItem = strs[0];
        for (let i = 0; i < firstItem.length; i++) {
            let char = firstItem[i];
            prepend = prepend + char;
            let isOK = true;
            if (DBG) console.log("Try ", prepend);
            for (let j = 0; j < strs.length; j++) {
                let word = strs[j];
                if (word.indexOf(prepend) != 0) {
                    isOK = false;
                    prepend = prepend.slice(0, prepend.length - 1)
                    break;
                }
            }

            if (isOK) {
                if (DBG) console.log("!PASS: ", prepend);
            } else {
                break;
            }
        }
    }

    if (DBG) console.log("## OUTPUT: ", prepend);
    return prepend;
};

let input = ["flower", "flow", "flight"];
longestCommonPrefix(input);
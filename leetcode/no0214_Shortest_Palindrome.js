
/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function (s) {

    let result = "";
    console.log("## INPUT: ", s);


    
    console.log("## OUTPUT: ", result);
    return result;
};


(shortestPalindrome("aacecaaa") == "aaacecaaa") ? console.log("OOOOOOOOOO PASS>") : console.log("XXXXXXXXXX NG>");
(shortestPalindrome("abcd") == "dcbabcd")? console.log("OOOOOOOOOO PASS>") : console.log("XXXXXXXXXX NG>");

/*
Given a string s, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.

Example 1:

Input: "aacecaaa"
Output: "aaacecaaa"
Example 2:

Input: "abcd"
Output: "dcbabcd"

*/
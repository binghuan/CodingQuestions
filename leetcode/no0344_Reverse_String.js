/*
344. Reverse String
Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let output = "";

    for(let i =0 ; i< s.length; i++) {
        output = s[i] + output;
    }

    return output;
};
/*
557. Reverse Words in a String III

Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

Example 1:
Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Note: In the string, each word is separated by single space and there will not be any extra space in the string.

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let reverseString = function(input) {

        let output = "";

        for(let i =0 ; i< input.length; i++) {
            output = input[i] + output;
        }

        return output;
    }
    
    let wordList = s.split(" ");
    let ans = "";
    for(let i =0; i< wordList.length; i++) {
        let word = wordList[i];
        let reversedWord = reverseString(word);
        ans = ans + " " + reversedWord;
    }
    
    return ans.trim();
    
};
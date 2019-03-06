/*
link: https://leetcode.com/problems/palindrome-number/
Determine whether an integer is a palindrome. 
An integer is a palindrome when it reads the same backward as forward.

Example 1:

Input: 121
Output: true
Example 2:

Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, 
it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: 10
Output: false
Explanation: Reads 01 from right to left. 
Therefore it is not a palindrome.
*/

const DBG = true;
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(DBG)console.log("## INPUT:", x);
    let answer = "";
    let input = x.toString();
    for(let i =0; i< input.length; i++) {
        let char = input[i];
        //output = char.concat(output);
        let temp = char + answer;
        answer = temp;
    } 

    let result = false;
    if(answer.indexOf(x) != -1) {
        result = true;
    }

    if(DBG)console.log("## OUTPUT");
    if(DBG)console.log(answer);
    return result;
};

let input = "121";
// input = "-121";
// input = "10";
isPalindrome(input);

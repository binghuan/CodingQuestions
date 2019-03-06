// link: https://leetcode.com/problems/reverse-integer/

/*
7. Reverse Integer
Easy

1955

2885

Favorite

Share
Given a 32-bit signed integer, reverse digits of an integer.

Example 1:

Input: 123
Output: 321
Example 2:

Input: -123
Output: -321
Example 3:

Input: 120
Output: 21
Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.
*/
const DBG = true;
/**
 * @param {number} x
 * @return {number}
 */

let MIN_INT32 = -Math.pow(2, 31);
let MAX_INT32 = Math.pow(2, 31) - 1;
var reverse = function (x) {
    if (DBG) console.log("## INPUT:", x);
    let answer = "";
    let input = x.toString();
    let prepend = "";
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        if (char == "+" || char == "-") {
            prepend = char;
            continue;
        }
        //output = char.concat(output);
        let temp = char + answer;
        answer = temp;
    }

    if (DBG) console.log("pre-answer: ", answer, MAX_INT32);
    if (answer > MAX_INT32) {
        answer = 0;
    } else if (answer < MIN_INT32) {
        answer = 0;
    } else {
        answer = prepend + answer;
    }

    if (DBG) console.log("## OUTPUT");
    if (DBG) console.log(answer);
    return answer;
};

let input = 123;
input = -123;
//input = 1534236469;
input = 2147483651;
input = 1563847412;
reverse(input);
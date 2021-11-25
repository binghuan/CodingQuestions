// link: https://leetcode.com/problems/maximum-subarray/
/*/
Given an integer array nums, 
find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, 
try coding another solution using the divide and conquer approach, 
which is more subtle.

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {

    let maxNumHistory = [];
    maxNumHistory[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        maxNumHistory[i] = Math.max(nums[i] + maxNumHistory[i - 1], nums[i])
    }
    maxNumHistory.sort((a, b) => {
        return b - a;
    })
    let result = maxNumHistory[0];
    console.log("OUTPUT:", result);
    return result;
};

/*
nums: [-2, 1, -3, 4, -1, 2, 1, -5, 4];
f:    [-2, 1, -2, 4, 3, 5, 6, 1, 5]
tips: Decide add prevoius result or not.
*/
let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(input);

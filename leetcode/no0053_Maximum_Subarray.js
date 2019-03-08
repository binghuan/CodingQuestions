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

    const DBG = true;

    if (DBG) console.log("## INPUT: ", nums, "length: ", nums.length);

    let max = null;
    let maxNumbers = [];

    // 1st, try to get 
    for (let i = 0; i < nums.length; i++) {

        if (DBG) console.log("@@@@@@@ start round ", i);
        let numArray = [];
        let maxValueInTheRound = nums[i];
        let maxValueArrayInTheRound = [];
        maxValueArrayInTheRound.push(nums[i]);
        let total = nums[i];
        numArray.push(nums[i]);

        for (let j = i + 1; j < nums.length; j++) {
            total += nums[j];
            numArray.push(nums[j]);
            if (total > maxValueInTheRound) {
                maxValueInTheRound = total;
                maxValueArrayInTheRound = numArray.slice(0);
                //if(DBG)console.log("total >nums[j]", maxValueInTheRound);
            }
        }

        if (DBG) console.log("after round ", i,
            "maxValueArrayInTheRound:", maxValueArrayInTheRound, "total:", maxValueInTheRound);

        if (max == null || maxValueInTheRound > max) {
            max = maxValueInTheRound;
            maxNumbers = maxValueArrayInTheRound.slice(0);
            if (DBG) console.log("!! Replace - total: ", max, "array: ", maxNumbers);
        }
    }

    if (DBG) console.log("## OUTPUT: ", "!! Replace - total: ", max, "array: ", maxNumbers);
    return max;
};

let input = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxSubArray(input);
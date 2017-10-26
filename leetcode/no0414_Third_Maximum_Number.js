/*
414. Third Maximum Number

Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
}

var thirdMax = function(nums) {
    
    nums = nums.filter(onlyUnique).sort(function(a,b){return b-a});
    console.log("sorted nums ==> ", nums);

    if(nums.length >= 3) {
        console.log("check 1: ", nums[2]);
        return nums[2];
    } else if (nums.length === 2) {
        console.log("check 2: ", nums[0]);
        return nums[0];
    } else if(nums.length ===1) {
        console.log("check 3: ", nums[0]);
        return nums[0];
    }
};
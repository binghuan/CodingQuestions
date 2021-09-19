/**
 * @param {number[]} nums
 * @return {number[]}
 */
var buildArray = function (nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let index = nums[i];
        result.push(nums[index]);
    }
    return result;
};
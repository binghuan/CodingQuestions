/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {

    let middle = n;
    let result = [];

    for (let i = 0; i < middle; i++) {
        result.push(nums[i]);
        result.push(nums[middle + i]);

    }
    
    return result;
};
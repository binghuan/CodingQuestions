/*
1. Two Sum

Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

Example:
Given nums = [2, 7, 11, 15], target = 9,

Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {

    let indexResultMap = {};
    let pair4Answer = [];
    for (let i = 0; i < nums.length; i++) {

        let currentNumber = nums[i];
        let diff = target - currentNumber;
        if (indexResultMap[diff] != null) {
            pair4Answer.push(i, indexResultMap[diff]);
            break;
        }

        indexResultMap[currentNumber] = i;

    }

    return pair4Answer.sort();

};
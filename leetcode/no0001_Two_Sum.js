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
var twoSum = function(nums, target) {
    
    var DBG = true;

    var ans = [];
    if(DBG)console.log("=== ## INPUT: ", nums, " == " , target);

    for(var i=0; i< nums.length; i++) {

        if(ans.length > 0) {
            break;
        }

        var num1 = nums[i];
        for(var j=i+1; j< nums.length; j++) {
            var num2 = nums[j];
            var sum = num1 + num2; 
            //if(DBG)console.log("Try", num1, " + " + num2,  sum , sum === target);

            if(sum === target) {
                if(DBG)console.log("!! HIT");
                ans.push(i);
                ans.push(j);
                break;
            }
        }
    }

    if(DBG) console.log("=== ## OUTPUT: ", ans);
    return ans;

};
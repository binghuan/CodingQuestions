/*
136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort();
    var currentValue = null;
    var lastOccurred = [];
    var ans = null;
    for(var i =0; i< nums.length; i++) {
        
        if(lastOccurred.length == 0 && lastOccurred.indexOf(nums[i]) === -1 ) {
            
        } else {
            lastOccurred.push(nums[i]);
        }
        
        if(lastOccurred.length == 0) {
            lastOccurred.push(nums[i]);
        }
    }
    
};
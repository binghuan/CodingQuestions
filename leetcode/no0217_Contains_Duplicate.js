/*
217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/


/**
 * @param {number[]} nums
 * @return {boolean}
 */

var containsDuplicate = function(nums) {
    
    if(nums.length === 0) {
        return false;
    } else if(nums.length === 1) {
        return false;
    }
    var sortedNums = nums.sort(function(a,b){return a-b});
    var temp = {};
    for(var i=0; i< sortedNums.length; i++) {
        if(temp[sortedNums[i]] != null) {
            return true;
        } else {
            temp[sortedNums[i]] = 1;
        }
    }
    
    return false;
};
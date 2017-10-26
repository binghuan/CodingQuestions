/*
448. Find All Numbers Disappeared in an Array

Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.

Example:

Input:
[4,3,2,7,8,2,3,1]

Output:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    
    var sortedNums = nums.sort();
    var temp = {};
    for(var i =0; i< nums.length ; i ++) {
        temp[nums[i]] = true;
    }

    var result = [];
    for(var i =0; i<= sortedNums.length ; i ++) {
        if(i === 0) {
            continue;
        }
        if(!temp[i]) {
            //console.log("push ", i);
            result.push(i);
        } else {
            //console.log("OO ", sortedNums[i]);
        }
    }

    console.log(result);
    return result;
};
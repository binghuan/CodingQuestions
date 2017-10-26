/*
485. Max Consecutive Ones

Given a binary array, find the maximum number of consecutive 1s in this array.

Example 1:
Input: [1,1,0,1,1,1]
Output: 3
Explanation: The first two digits or the last three digits are consecutive 1s.
    The maximum number of consecutive 1s is 3.
Note:

The input array will only contain 0 and 1.
The length of input array is a positive integer and will not exceed 10,000

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    if(nums.length > 10000) {
        return -1;
    }
  
    var counter = 0;
    var maxCount = 0;
    for(var i=0; i< nums.length; i++) {
        //console.log("nums[" + i + "] = " , nums[i]);
        if(nums[i] == 0) {
            if(counter > maxCount) {
                maxCount = counter;
            }
            counter =0; 
        } else {
            counter +=1;
        }
    }

    if(counter > maxCount) {
        maxCount = counter;
    }

    console.log(maxCount);
    return maxCount;
};

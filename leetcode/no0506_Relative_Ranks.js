/*
506. Relative Ranks

Given scores of N athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".

Example 1:
Input: [5, 4, 3, 2, 1]
Output: ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
Explanation: The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". 
For the left two athletes, you just need to output their relative ranks according to their scores.
Note:
N is a positive integer and won't exceed 10,000.
All the scores of athletes are guaranteed to be unique.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    
    console.log("Before: ", nums);

    var numsCopy = nums.slice();

    nums.sort(function(a,b) {
        return b-a;
    });
    console.log("After: ", nums);

    var counter = 0;
    for(var i =0; i< numsCopy.length ; i++) {
        counter +=1;
        if(numsCopy[i] === nums[0]) {
            numsCopy[i] = "Gold Medal";
        } else if(numsCopy[i] === nums[1]) {
            numsCopy[i] = "Silver Medal";
        } else if(numsCopy[i] === nums[2]) {
            numsCopy[i] = "Bronze Medal";
        } else {
            var pos = nums.indexOf(numsCopy[i]);
            numsCopy[i] = (pos +1).toString();
        }
    }
    
    console.log(numsCopy);
    return numsCopy;
    
};
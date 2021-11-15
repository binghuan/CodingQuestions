/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {

    let map = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];

        if(map[num] == null) {
            map[num] = [num];
        }

        let middle = num;
        for(let j =1; j<= middle; j++) {
            if(num%j == 0 ) {
                map[num]
            }
        }
    }

};

// Input: nums = [1,2,4,8]
// Output: [1,2,4,8]
largestDivisibleSubset(nums)
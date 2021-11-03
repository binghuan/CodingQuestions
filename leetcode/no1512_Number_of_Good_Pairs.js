/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    let result = [];

    for (let i = 0; i < nums.length; i++) {

        for (let j = i; j < nums.length; j++) {

            if (i == j) {
                continue;
            }
            if (nums[i] == nums[j]) {
                result.push([i, j]);
            }
        }
    }

    return result.length;
};

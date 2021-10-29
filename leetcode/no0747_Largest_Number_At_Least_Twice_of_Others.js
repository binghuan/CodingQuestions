/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {

    let numIndexes = {};

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        numIndexes[num] = i;
    }

    nums.sort((a, b) => {
        return b - a;
    })

    if (nums[0] >= nums[1] * 2) {
        return numIndexes[nums[0]];
    } else {
        if (nums.length == 1) {
            return 0;
        }
        return -1;
    }
};
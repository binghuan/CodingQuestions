/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    console.log('## INPUT: ', nums, 'steps=', k);
    for (let j = 0; j < k; j++) {
        let temp = nums[nums.length - 1];
        for (let i = nums.length - 1; i > 0; i--) {
            // console.log("i=", i);
            nums[i] = nums[i - 1];
        }
        nums[0] = temp;
        console.log(' -------> ', nums, ', ROUND ', j);
    }
};

let input = [1, 2, 3, 4, 5, 6, 7], k = 3;
// input = [-1,-100,3,99], k = 2;
rotate(input, k);
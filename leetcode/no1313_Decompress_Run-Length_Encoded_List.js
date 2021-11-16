/**
 * @param {number[]} nums
 * @return {number[]}
 */
var decompressRLElist = function (nums) {

    let result = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i + 1];
        let times = parseInt(nums[i]);
        let temp = [];
        for (let i = 0; i < times; i++) {
            temp.push(num);
        }
        result = result.concat(temp.slice(0));
        i = i + 1;
    }
    return result;
};

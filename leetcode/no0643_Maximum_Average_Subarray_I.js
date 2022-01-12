/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let maxAverage = Number.MIN_SAFE_INTEGER;
    let sum = 0;
    let tempArray = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (tempArray.length >= k) {
            sum -= tempArray.shift();
        }
        tempArray.push(num);
        sum += num;
        if (tempArray.length == k) {
            if (sum / k > maxAverage) {
                maxAverage = sum / k;
            }
        }
    }
    return maxAverage;
};
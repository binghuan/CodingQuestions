/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let min = null;
    nums.forEach((num) => {
        if (min == null) {
            min = num;
        } else {
            if (num < min) {
                min = num;
            }
        }
    })
    return min;
};
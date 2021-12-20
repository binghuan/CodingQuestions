/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let items = nums.join("").split("0");
    items.sort((a, b) => {
        return b.length - a.length;
    })
    return items[0].length;
};
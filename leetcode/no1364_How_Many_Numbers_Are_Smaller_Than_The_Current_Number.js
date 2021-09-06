/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {

    let sortedNums = nums.slice(0);
    sortedNums.sort((a, b) => {
        return a - b;
    })

    let result = [];
    let length = sortedNums.length;
    nums.forEach((num) => {
        let pos = sortedNums.indexOf(num);
        let total = pos;
        result.push(total);
    })
    return result;
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let sortedArray = nums.slice(0).sort((a, b) => { return a - b });
    let rotateArray = (nums) => {
        let element = nums.shift();
        nums.push(element);
    }

    for (let i = 0; i < nums.length; i++) {
        rotateArray(nums)
        if (nums.toString() == sortedArray.toString()) {
            return true;
        }
    }
    return false;
};
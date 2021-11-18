/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {

    let previousNums = [];
    let ans = [];

    function checkPreviousNums() {
        let startNum = previousNums[0];
        let endNum = previousNums[previousNums.length - 1];
        let result = "";
        if (endNum != null && endNum != startNum) {
            result = `${startNum}->${endNum}`
        } else {
            result = `${startNum}`
        }
        ans.push(result);
    }

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (previousNums.length == 0) {
            previousNums.push(num);
        } else if (num - previousNums[previousNums.length - 1] == 1) {
            previousNums.push(num);
        } else {
            checkPreviousNums();
            previousNums = [num];
        }
    }

    if (previousNums.length > 0) {
        checkPreviousNums();
    }

    return ans
};
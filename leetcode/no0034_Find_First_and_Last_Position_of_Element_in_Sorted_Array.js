/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {

    let positionList = [];
    for (let i = 0; i < nums.length; i++) {
        let number = nums[i];
        if (number == target) {
            positionList.push(i);
        }
    }

    let firstPosition = -1;
    let lastPosition = -1;
    if (positionList.length > 0) {
        firstPosition = positionList[0];
        lastPosition = positionList.pop();
    }

    return [firstPosition, lastPosition];
};
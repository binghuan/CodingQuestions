/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let result = [];
    for (let i = 0; i < nums1.length; i++) {
        let targetNum = nums1[i];
        let scanStarted = false;
        result[i] = -1;
        for (let j = 0; j < nums2.length; j++) {
            let num = nums2[j];
            if (scanStarted && num > targetNum) {
                result[i] = num;
                break;
            } else if (num == targetNum) {
                scanStarted = true;
            }
        }
    }
    return result;
};
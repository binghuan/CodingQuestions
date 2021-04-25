/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {

    let theMap = {};

    nums1.forEach((num) => {

        theMap[num] = 1;

    })

    result = [];

    nums2.forEach((num) => {
        if (theMap[num] == 1) {
            theMap[num] = 2;
            result.push(num);
        }
    })

    return result;
};
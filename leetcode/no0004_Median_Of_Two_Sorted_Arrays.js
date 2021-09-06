/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {

    let nums = nums1.concat(nums2).sort((a, b) => {
        return a - b;
    });

    let theMedian = 0;

    if (nums.length % 2 == 1) {
        let middleIndex = (nums.length / 2).toString().split(".")[0]
        theMedian = nums[middleIndex];
    } else {
        let middleIndex = nums.length / 2;
        theMedian = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
    }

    return theMedian;
};
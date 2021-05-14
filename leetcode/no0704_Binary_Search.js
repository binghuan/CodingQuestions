/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {

        let mid = parseInt((start + end) / 2);

        if (target == nums[mid]) {

            return mid;

        } else if (target < nums[mid]) {

            end = mid - 1;

        } else if (target > nums[mid]) {

            start = mid + 1;
        }
    }

    return -1;
};

// reference: https://zh.wikipedia.org/wiki/%E4%BA%8C%E5%88%86%E6%90%9C%E5%B0%8B%E6%BC%94%E7%AE%97%E6%B3%95
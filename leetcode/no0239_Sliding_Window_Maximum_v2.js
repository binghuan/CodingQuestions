/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    let result = [];
    let curr = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        curr.push(num);
        if (curr.length == k) {
            let max = Math.max(...curr);
            result.push(max);

            curr.shift();
        }
    }

    //console.log("OUTPUT:", result);
    return result;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
//maxSlidingWindow([9, 11], 2);
//Output: [3,3,5,5,6,7]
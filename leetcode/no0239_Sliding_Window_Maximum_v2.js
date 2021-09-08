/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
    console.log("INPUT:", nums, k);
    let q = [];// Keep largest number's index
    let ans = [];

    // Filter number and save the index, 
    // ------------------------------------------------------------------------>
    for (let i = 0; i < k; i++) {
        console.log("check index", i, "value=", nums[i]);
        while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
            console.log("!! pop");
            q.pop();
            console.log("q to ", q);
        }
        console.log("!! push");
        q.push(i);
        console.log("q -> ", q);
    }
    ans.push(nums[q[0]]);
    // ------------------------------------------------------------------------<
    console.log("-------------------------------------------------------------");
    console.log("After 1st filter, q = ", q);
    console.log("ans = ", ans);

    for (let i = k; i < nums.length; i++) {
        // Remove the index out of range for window size
        // for example: [ index: 0 , 1, 2], 
        // but the started index is 3, so, we need to remove the index: 0 from q.
        if (q[0] <= i - k) {
            q.shift();
        }

        // Next, we do the same which we did for the first k elements
        // -------------------------------------------------------------------->
        while (q.length > 0 && nums[i] > nums[q[q.length - 1]]) {
            q.pop();
        }
        q.push(i);
        ans.push(nums[q[0]]);
        // --------------------------------------------------------------------<
    }
    return ans;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
// Output: [3,3,5,5,6,7]

// reference: https://leetcode.com/problems/sliding-window-maximum/discuss/1448050/Dequeue-solution-O(N)-time-and-O(K)-space-with-explanation